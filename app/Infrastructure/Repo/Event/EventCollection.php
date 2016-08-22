<?php namespace app\Infrastructure\Repo\Event;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/13/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;
use app\Core\Event\EventCollectionInterface;
use app\Core\Event\Model\Event;
use app\Core\Shared\TypedCollection;

/**
 * Class EventCollection
 * @package app\Infrastructure\Repo\Event
 */
class EventCollection extends TypedCollection implements EventCollectionInterface
{

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return Event::class;
    }

    /**
     * @param DomainEntity $event
     *
     * @return mixed|void
     */
    public function add(DomainEntity $event)
    {
        // TODO: Implement add() method.
    }
}
