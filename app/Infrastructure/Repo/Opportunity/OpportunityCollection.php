<?php namespace App\Infrastructure\Repo\Opportunity;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\DomainEntity;
use App\Core\Opportunity\Model\Opportunity;
use App\Core\Opportunity\OpportunityCollectionInterface;
use App\Core\Shared\TypedCollection;

/**
 * Class OpportunityCollection
 * @package App\Infrastructure\Repo\Opportunity
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
