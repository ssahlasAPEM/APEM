<?php namespace app\Infrastructure;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;

/**
 * Class AbstractDomainObjectAssembler
 * @package app\Infrastructure
 */
abstract class AbstractDomainObjectAssembler
{

    protected $factory;

    /**
     * AbstractDomainObjectAssembler constructor.
     *
     * @param AbstractPersistenceFactory $factory
     */
    public function __construct(AbstractPersistenceFactory $factory)
    {
        $this->factory = $factory;
    }

    /**
     * @codeCoverageIgnore
     */
    protected function getFactory()
    {
        return $this->factory;
    }

    /**
     * @param AbstractIdentityObject $idObj
     *
     * @return mixed
     */
    abstract public function findOne(AbstractIdentityObject $idObj);

    /**
     * @param AbstractIdentityObject|null $idObj
     *
     * @return mixed
     */
    abstract public function findAll(AbstractIdentityObject $idObj = null);

    /**
     * @param                             $limit
     * @param                             $page
     * @param AbstractIdentityObject|null $idObj
     *
     * @return mixed
     */
    abstract public function findAllPaginated($limit, $page, AbstractIdentityObject $idObj = null);

    /**
     * @param DomainEntity $object
     *
     * @return mixed
     */
    abstract public function create(DomainEntity $object);
}
