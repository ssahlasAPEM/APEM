<?php namespace app\Core;

/**
 * Created by Curious Minds Media, Inc.
 * User: Eric Meyer (eric@curiousm.com)
 * Date: 3/10/15
 * Time: 1:45 PM
 */

use app\Core\Shared\HelperFactory;
use app\Models\Owner;

/**
 * Class DomainEntity
 * @package app\Core
 */
abstract class DomainEntity
{

    private $createdDate;
    private $dbId = - 1;
    private $updatedDate;
    private $versionHash;

    /**
     * DomainEntity constructor.
     *
     * @param null $dbId
     */
    public function __construct($dbId = null)
    {
        if ($dbId !== null) {
            $this->dbId = $dbId;
        }
    }

    /**
     * @param $type
     *
     * @return mixed
     * @throws \Exception
     */
    public static function getCollection($type)
    {
        return HelperFactory::getCollection($type);
    }

    /**
     * @return mixed
     */
    public function collection()
    {
        return self::getCollection(get_class($this));
    }

    /**
     * @return mixed
     */
    public function finder()
    {
        return self::getFinder(get_class($this));
    }

    /**
     * @param $type
     *
     * @return mixed
     * @throws \Exception
     */
    public static function getFinder($type)
    {
        return HelperFactory::getMapper($type);
    }

    /**
     * @return int|null
     */
    public function getId()
    {
        return $this->dbId;
    }

    /**
     * @param $dbId
     */
    public function setId($dbId)
    {
        $this->dbId = $dbId;
    }

    /**
     * @return Model
     */
    public function getCreatedDate()
    {
        return $this->createdDate;
    }

    /**
     * @param Model $createdDate
     */
    public function setCreatedDate($createdDate)
    {
        $this->createdDate = $createdDate;
    }

    /**
     * @return Model
     */
    public function getUpdatedDate()
    {
        return $this->updatedDate;
    }

    /**
     * @param Model $updatedDate
     */
    public function setUpdatedDate($updatedDate)
    {
        $this->updatedDate = $updatedDate;
    }

    /**
     * @return mixed
     */
    public function getVersionHash()
    {
        return $this->versionHash;
    }

    /**
     * @param mixed $versionHash
     */
    public function setVersionHash($versionHash)
    {
        $this->versionHash = $versionHash;
    }
}
