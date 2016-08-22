<?php namespace app\Services\Api\Json\V1;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/13/16
 * Time: 12:16 PM
 */

use app\Core\Event\Repository\EventInterface;

/**
 * Class EventService
 * @package app\Services\Api\Json\V1
 */
class EventService extends RESTFULService
{

    /**
     * @param EventInterface $interface
     */
    public function __construct(EventInterface $interface)
    {
        parent::__construct();
        $this->interface = $interface;
    }
}
