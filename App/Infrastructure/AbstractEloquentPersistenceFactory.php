<?php namespace App\Infrastructure;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\Field\Model\Field;
use App\Core\Opportunity\Model\Opportunity;
use App\Core\User\Model\User;

/**
 * Class AbstractEloquentPersistenceFactory
 * @package App\Infrastructure
 */
abstract class AbstractEloquentPersistenceFactory extends AbstractPersistenceFactory
{

    /**
     * @param $targetClass
     *
     * @return mixed
     * @throws \Exception
     */
    public static function getFactory($targetClass)
    {
        // Using a lookup table to reduce the "cyclomatic complexity" warning on
        $factoryMap = [
            User::class                =>
                'App\Infrastructure\Repo\User\EloquentUserPersistenceFactory',
            Field::class               =>
                'App\Infrastructure\Repo\Field\EloquentFieldPersistenceFactory',
            Opportunity::class       =>
                'App\Infrastructure\Repo\Opportunity\EloquentOpportunityPersistenceFactory'
        ];

        if (array_key_exists($targetClass, $factoryMap)) {
            return new $factoryMap[ $targetClass ]();
        }

        throw new \Exception("No Eloquent Persistence Factory for $targetClass exists");
    }
}
