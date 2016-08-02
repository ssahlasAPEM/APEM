<?php namespace App\Core\User;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\DomainEntity;

/**
 * Interface UserCollectionInterface
 * @package App\Core\User
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
