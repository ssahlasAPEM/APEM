<?php namespace app\Infrastructure\Repo\Opportunity;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;
use app\Core\Opportunity\Model\Opportunity;
use app\Core\Opportunity\OpportunityCollectionInterface;
use app\Core\Shared\TypedCollection;

/**
 * Class OpportunityCollection
 * @package app\Infrastructure\Repo\Opportunity
 */
class OpportunityCollection extends TypedCollection implements OpportunityCollectionInterface
{

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return Opportunity::class;
    }

    /**
     * @param DomainEntity $field
     *
     * @return mixed|void
     */
    public function add(DomainEntity $field)
    {
        // TODO: Implement add() method.
    }
}
