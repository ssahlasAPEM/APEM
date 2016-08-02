<?php namespace App\Infrastructure\Repo\User;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\DomainEntity;
use App\Core\Shared\TypedCollection;
use App\Core\User\Model\User;
use App\Core\User\UserCollectionInterface;

/**
 * Class UserCollection
 * @package App\Infrastructure\Repo\User
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
