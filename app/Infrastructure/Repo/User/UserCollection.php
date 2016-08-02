<?php namespace app\Infrastructure\Repo\User;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;
use app\Core\Shared\TypedCollection;
use app\Core\User\Model\User;
use app\Core\User\UserCollectionInterface;

/**
 * Class UserCollection
 * @package app\Infrastructure\Repo\User
 */
class UserCollection extends TypedCollection implements UserCollectionInterface
{

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return User::class;
    }

    /**
     * @param DomainEntity $user
     *
     * @return mixed|void
     */
    public function add(DomainEntity $user)
    {
        // TODO: Implement add() method.
    }
}
