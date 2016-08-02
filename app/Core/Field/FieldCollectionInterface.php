<?php namespace app\Core\Field;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;

/**
 * Interface FieldCollectionInterface
 * @package app\Core\Field
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
