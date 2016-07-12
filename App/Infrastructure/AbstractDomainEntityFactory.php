<?php namespace App\Infrastructure;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use Log;
use App\Core\DomainEntity;
use App\Core\DomainEntityFieldFlags as Flags;

/**
 * Class AbstractDomainEntityFactory
 * @package App\Infrastructure
 */
abstract class AbstractDomainEntityFactory
{

    public $backendMapping;
    public $frontendMapping;
    public $valueObjects;
    public $idKey;

    /**
     * Creates a domain entity from a backend model
     *
     * @param array $array
     *
     * @return mixed
     */
    public function createObject(array $array)
    {
        $identifier = null;
        if (array_key_exists($this->getIdKey(), $array)) {
            $identifier = $array[ $this->getIdKey() ];
        }

        $entity = $this->newDomainEntity($identifier);
        $entity = $this->dynamicallyCreate(
            $entity,
            $array,
            $this->getBackendMapping(),
            $this->getValueObjects()
        );

        return $entity;
    }

    /**
     * Creates a domain entity from a json model (usually, passed to us by the
     * frontend)
     *
     * @param $json
     *
     * @return mixed
     * @throws \Exception
     */
    public function createObjectFromJson($json)
    {
        $dbId = null;
        if (array_key_exists('id', $json)) {
            $dbId = $json['id'];
            unset($json['id']);
        }

        $entity = $this->newDomainEntity($dbId);
        $entity = $this->dynamicallyCreate(
            $entity,
            $json,
            $this->getFrontendMapping(),
            $this->getValueObjects()
        );

        return $entity;
    }

    /**
     * Builds a DomainEntity from $data using preconfigured mappings
     *
     * @param DomainEntity $entity       An already created DomainEntity
     * @param array        $data         The data to construct the DomainEntity with
     * @param array        $mapping      A mapping from the keys in $data to setters in $entity
     * @param array        $valueObjects A mapping from setters in $entity to Value Objects required by those setters
     *
     * @return mixed
     * @throws \Exception
     */
    public function dynamicallyCreate(DomainEntity $entity, $data, $mapping, $valueObjects)
    {
        $class        = $this->targetClass();
        $isRightClass = ($entity instanceof $class);
        if ($isRightClass === false) {
            $badEntity = get_class($entity);
            $ourClass  = get_class($this);
            throw new \Exception("Mismatch between $badEntity and $ourClass!");
        }

        foreach ($data as $key => $val) {
            /* Key is not in the mapping. For now we silently skip, but we
             * should implement validation of required keys, if there are any
             */
            if (!array_key_exists($key, $mapping)) {
                continue;
            }

            /* If the mapping exists but has no value, this means
             * the getter/setter suffix is identical to the key
             */
            list($suffix, $flags) = $mapping[ $key ];
            if ($flags & Flags::SKIP) {
                continue;
            }

            if ($flags & Flags::JSON) {
                $val = json_decode($val, true);
            }

            $setter = 'set' . $suffix;

            /* Check if we need a Value Object */
            if (array_key_exists($suffix, $valueObjects)) {
                $className    = $valueObjects[ $suffix ];
                $reflectClass = new \ReflectionClass($className);
                $val          = $reflectClass->newInstance($val);
            }

            /* set the value */
            $entity->{$setter}($val);
        }

        return $entity;
    }

    /**
     * Copies all shared properties except Id
     *
     * @param DomainEntity $dst
     * @param DomainEntity $src
     *
     * @return DomainEntity
     */
    public function copyEntity(DomainEntity $dst, DomainEntity $src)
    {
        $mapping      = $this->getBackendMapping();
        $valueObjects = $this->getValueObjects();

        foreach ($mapping as $backendKey => $suffixAndFlags) {
            list($suffix, $flags) = $suffixAndFlags;

            if ($flags & Flags::SKIP) {
                continue;
            }

            $getter = 'get' . $suffix;
            $setter = 'set' . $suffix;

            if (!method_exists($src, $getter) || !method_exists($dst, $setter)) {
                continue;
            }

            $val = $src->{$getter}();
            if (array_key_exists($suffix, $valueObjects)) {
                $className    = $valueObjects[ $suffix ];
                $reflectClass = new \ReflectionClass($className);
                $val          = $reflectClass->newInstance($val);
            }

            $dst->{$setter}($val);
        }

        return $dst;
    }

    /**
     * @param              $model
     * @param DomainEntity $object
     *
     * @return Model
     */
    public function doStoreMapping($model, DomainEntity $object, $isUpdate = false)
    {
        $mapping = $this->getBackendMapping();
        $idKey   = $this->getIdKey();

        foreach ($mapping as $eloquentKey => list($getterSuffix, $flags)) {
            if ($eloquentKey === $idKey) {
                continue;
            }

            if ($flags & Flags::SKIP) {
                continue;
            }

            if ($flags & Flags::READONLY) {
                continue;
            } elseif ($flags & Flags::CREATEONLY && $isUpdate === true) {
                continue;
            } elseif ($flags & Flags::UPDATEONLY && $isUpdate === false) {
                continue;
            }

            $getter = 'get' . $getterSuffix;
            $val    = $object->{$getter}();

            /* If the variable is an instance of a TypedCollection i.e. Stages
             * within Journeys And the collection is empty, set this to null.
             * MongoDB will error if you set a data node to "" as opposed to
             * null
            if (($val instanceof TypedCollection && $val->isEmpty()) || (is_array($val) && empty($val))) {
                Log::info($eloquentKey . " writing null");
                $val = null;
            }
             */

            if ($flags & Flags::JSON) {
                $val = json_encode($val);
            }

            $model->{$eloquentKey} = $val;
        }

        return $model;
    }

    /**
     * Returns the target class that we are working with
     *
     * @return mixed
     */
    abstract public function targetClass();

    /**
     * @param $identifier
     *
     * @return mixed
     */
    public function newDomainEntity($identifier)
    {
        $target = $this->targetClass();

        return new $target($identifier);
    }

    private function getMergedMapping($subKey)
    {
        $domentMapping = config('doment_mappings')[ $this->targetClass() ][ $subKey ];
        $defaults      = config('doment_mappings')['default'][ $subKey ];

        return array_merge($defaults, $domentMapping);
    }

    public function getBackendMapping()
    {
        if (empty($this->backendMapping)) {
            $this->backendMapping = $this->getMergedMapping('eloquentToDomainEntity');
        }

        return $this->backendMapping;
    }

    public function getFrontendMapping()
    {
        if (empty($this->frontendMapping)) {
            $this->frontendMapping = $this->getMergedMapping('jsonToDomainEntity');
        }

        return $this->frontendMapping;
    }

    public function getValueObjects()
    {
        if (empty($this->valueObjects)) {
            $this->valueObjects = $this->getMergedMapping('valueObjects');
        }

        return $this->valueObjects;
    }

    /**
     * Override this function if your model has a different id property
     *
     * @return string
     */
    public function getIdKey()
    {
        return 'id';
    }
}
