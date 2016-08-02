<?php namespace App\Core\Field;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\DomainEntity;

/**
 * Interface FieldCollectionInterface
 * @package App\Core\Field
 */
interface FieldCollectionInterface
{

    /**
     * @param DomainEntity $field
     *
     * @return mixed
     */
    public function add(DomainEntity $field);
}
