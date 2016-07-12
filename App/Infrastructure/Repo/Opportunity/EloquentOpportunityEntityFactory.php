<?php namespace App\Infrastructure\Repo\Opportunity;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\Opportunity\Model\Opportunity;
use App\Infrastructure\AbstractDomainEntityFactory;

/**
 * Class EloquentOpportunityEntityFactory
 * @package App\Infrastructure\Repo\Opportunity
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
