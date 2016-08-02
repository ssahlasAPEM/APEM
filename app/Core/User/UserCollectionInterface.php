<?php namespace app\Core\User;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;

/**
 * Interface UserCollectionInterface
 * @package app\Core\User
 */
interface UserCollectionInterface
{

    /**
     * @param DomainEntity $user
     *
     * @return mixed
     */
    public function add(DomainEntity $user);
}
