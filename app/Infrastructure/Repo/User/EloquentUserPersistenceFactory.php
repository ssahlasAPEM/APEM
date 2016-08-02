<?php namespace app\Infrastructure\Repo\User;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\User\Repository\UserInterface;
use app\Infrastructure\AbstractEloquentPersistenceFactory;

/**
 * Class EloquentUserPersistenceFactory
 * @package app\Infrastructure\Repo\User
 */
class EloquentUserPersistenceFactory extends AbstractEloquentPersistenceFactory
{

    /**
     * @return mixed
     */
    public function getMapper()
    {
        return app()->make(UserInterface::class);
    }

    /**
     * @return EloquentUserEntityFactory
     */
    public function getDomainEntityFactory()
    {
        return new EloquentUserEntityFactory();
    }

    /**
     * @param array $array
     *
     * @return UserCollection
     */
    public function getCollection(array $array)
    {
        return new UserCollection($array, $this->getDomainEntityFactory());
    }
}
