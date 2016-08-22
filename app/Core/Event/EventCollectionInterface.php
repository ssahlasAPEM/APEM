<?php namespace app\Core\Event;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/15/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;

/**
 * Interface EventCollectionInterface
 * @package app\Core\Event
 */
interface EventCollectionInterface
{

    /**
     * @param DomainEntity $event
     *
     * @return mixed
     */
    public function add(DomainEntity $event);
}
