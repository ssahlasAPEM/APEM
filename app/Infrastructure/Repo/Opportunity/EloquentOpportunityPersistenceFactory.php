<?php namespace app\Infrastructure\Repo\Opportunity;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\Opportunity\Repository\OpportunityInterface;
use app\Infrastructure\AbstractEloquentPersistenceFactory;

/**
 * Class EloquentOpportunityPersistenceFactory
 * @package app\Infrastructure\Repo\Opportunity
 */
class EloquentOpportunityPersistenceFactory extends AbstractEloquentPersistenceFactory
{

    /**
     * @return mixed
     */
    public function getMapper()
    {
        return app()->make(OpportunityInterface::class);
    }

    /**
     * @return EloquentOpportunityEntityFactory
     */
    public function getDomainEntityFactory()
    {
        return new EloquentOpportunityEntityFactory();
    }

    /**
     * @param array $array
     *
     * @return OpportunityCollection
     */
    public function getCollection(array $array)
    {
        return new OpportunityCollection($array, $this->getDomainEntityFactory());
    }
}
