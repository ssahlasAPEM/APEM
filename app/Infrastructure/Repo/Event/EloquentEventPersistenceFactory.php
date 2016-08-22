<?php namespace app\Infrastructure\Repo\Event;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/13/16
 * Time: 4:00 PM
 */

use app\Core\Event\Repository\EventInterface;
use app\Infrastructure\AbstractEloquentPersistenceFactory;

/**
 * Class EloquentEventPersistenceFactory
 * @package app\Infrastructure\Repo\Event
 */
class EloquentEventPersistenceFactory extends AbstractEloquentPersistenceFactory
{

    /**
     * @return mixed
     */
    public function getMapper()
    {
        return app()->make(EventInterface::class);
    }

    /**
     * @return EloquentEventEntityFactory
     */
    public function getDomainEntityFactory()
    {
        return new EloquentEventEntityFactory();
    }

    /**
     * @param array $array
     *
     * @return UserCollection
     */
    public function getCollection(array $array)
    {
        return new EventCollection($array, $this->getDomainEntityFactory());
    }
}
