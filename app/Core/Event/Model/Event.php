<?php namespace app\Core\Event\Model;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/15/16
 * Time: 3:35 PM
 */

use app\Core\DomainEntity;

/**
 * Class Event
 * @package app\Core\Event\Model
 */
class Event extends DomainEntity
{

    private $opportunityId;
    private $type;
    private $date;

    /**
     * @return mixed
     */
    public function getOpportunityId()
    {
        return $this->opportunityId;
    }

    /**
     * @param mixed $opportunityId
     */
    public function setOpportunityId($opportunityId)
    {
        $this->opportunityId = $opportunityId;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param mixed $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }
}
