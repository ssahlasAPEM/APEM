<?php namespace App\Infrastructure;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 *
 * Base Class for all Infrastructure Repository Classes.
 * Provides pagination, object creation and basic
 * CRUD functionality.
 *
 */

use App\Core\Shared\CrudInterface;
use Illuminate\Foundation\Bus\DispatchesJobs;
use App\Core\DomainEntity;
use App\Core\Shared\CollectionMeta;
use App\Core\Shared\TypedCollection;
use App\Jobs\LogEvent;

/**
 * Class AbstractMapper
 * @package App\Infrastructure
 */
abstract class AbstractMapper implements CrudInterface
{

    use DispatchesJobs;

    protected $ownerId = null;
    protected $totalPages;

    /**
     * @return null
     * @throws \Exception
     */
    public function getOwnerId()
    {
        if ($this->ownerId === null) {
            $this->ownerId = session()->get('user.externalId');
            if ($this->ownerId === null) {
                throw new \Exception('Invalid session! No user.externalId');
            }
        }

        return $this->ownerId;
    }

    /**
     * @param DomainEntity $obj
     */
    public function insert(DomainEntity $obj)
    {
        $this->addToMap($obj);
    }

    /**
     * Get a typed, cached collection from the raw data
     *
     * @param $raw
     *
     * @return Repo\Account\AccountCollection|Repo\Contact\ContactCollection
     */
    public function getCollection($raw)
    {
        return $this->getFactory()->getCollection($raw);
    }

    /**
     * @param $array
     *
     * @return mixed
     */
    public function createObject($array)
    {
        $entityFactory = $this->getFactory()->getDomainEntityFactory();

        return $entityFactory->createObject($array);
    }

    /**
     * @param $json
     *
     * @return mixed
     */
    public function createObjectFromJson($json)
    {
        $entityFactory = $this->getFactory()->getDomainEntityFactory();

        return $entityFactory->createObjectFromJson($json);
    }

    /**
     * @param              $model
     * @param DomainEntity $object
     * @param boolean      $isUpdate
     *
     * @return mixed
     */
    public function doStoreMapping($model, DomainEntity $object, $isUpdate = false)
    {
        $entityFactory = $this->getFactory()->getDomainEntityFactory();

        return $entityFactory->doStoreMapping($model, $object, $isUpdate);
    }

    /**
     * Adds Pagination Info to the collection
     *
     * @param                 $limit
     * @param                 $page
     * @param                 $total
     * @param TypedCollection $collection
     *
     * @param null            $extra
     *
     * @return TypedCollection
     */
    public function addMetaInfo($limit, $page, $total, TypedCollection $collection, $extra = null)
    {
        $collectionMeta = new CollectionMeta($limit, $page, $extra);
        $collectionMeta->setTotalRecords($total);
        $collection->setMeta($collectionMeta);

        return $collection;
    }

    public function doConcurrencyChecks()
    {
        return config('doment_mappings')[ $this->targetClass() ]['doConcurrencyChecks'];
    }

    /**
     * @return mixed
     */
    abstract protected function getFactory();

    /**
     * @return mixed
     */
    abstract public function targetClass();

    /**
     * @param $limit
     * @param $page
     *
     * @return mixed
     */
    abstract public function findAllPaginated($limit, $page);

    /**
     * @param DomainEntity $object
     *
     * @return mixed
     */
    abstract public function update(DomainEntity $object);
}
