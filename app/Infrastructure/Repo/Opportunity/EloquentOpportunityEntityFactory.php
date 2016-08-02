<?php namespace app\Infrastructure\Repo\Opportunity;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\Opportunity\Model\Opportunity;
use app\Infrastructure\AbstractDomainEntityFactory;

/**
 * Class EloquentOpportunityEntityFactory
 * @package app\Infrastructure\Repo\Opportunity
 */
class EloquentOpportunityEntityFactory extends AbstractDomainEntityFactory
{

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return Opportunity::class;
    }
}
