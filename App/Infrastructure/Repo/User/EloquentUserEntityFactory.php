<?php namespace App\Infrastructure\Repo\User;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\User\Model\User;
use App\Infrastructure\AbstractDomainEntityFactory;

/**
 * Class EloquentUserEntityFactory
 * @package App\Infrastructure\Repo\User
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
