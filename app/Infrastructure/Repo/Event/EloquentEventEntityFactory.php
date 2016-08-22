<?php namespace app\Infrastructure\Repo\Event;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/13/16
 * Time: 4:00 PM
 */

use app\Core\Event\Model\Event;
use app\Infrastructure\AbstractDomainEntityFactory;

/**
 * Class EloquentEventEntityFactory
 * @package app\Infrastructure\Repo\Event
 */
class EloquentEventEntityFactory extends AbstractDomainEntityFactory
{

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return Event::class;
    }
}
