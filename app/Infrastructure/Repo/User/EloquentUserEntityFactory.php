<?php namespace app\Infrastructure\Repo\User;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\User\Model\User;
use app\Infrastructure\AbstractDomainEntityFactory;

/**
 * Class EloquentUserEntityFactory
 * @package app\Infrastructure\Repo\User
 */
class EloquentUserEntityFactory extends AbstractDomainEntityFactory
{

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return User::class;
    }
}
