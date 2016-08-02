<?php namespace app\Core\Opportunity;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;

/**
 * Interface OpportunityCollectionInterface
 * @package app\Core\Opportunity
 */
interface OpportunityCollectionInterface
{

    /**
     * @param DomainEntity $field
     *
     * @return mixed
     */
    public function add(DomainEntity $field);
}
