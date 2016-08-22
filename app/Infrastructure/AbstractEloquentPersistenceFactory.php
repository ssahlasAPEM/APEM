<?php namespace app\Infrastructure;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\Event\Model\Event;
use app\Core\Field\Model\Field;
use app\Core\Opportunity\Model\Opportunity;
use app\Core\User\Model\User;

/**
 * Class AbstractEloquentPersistenceFactory
 * @package app\Infrastructure
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
            User::class        =>
                'app\Infrastructure\Repo\User\EloquentUserPersistenceFactory',
            Field::class       =>
                'app\Infrastructure\Repo\Field\EloquentFieldPersistenceFactory',
            Opportunity::class =>
                'app\Infrastructure\Repo\Opportunity\EloquentOpportunityPersistenceFactory',
            Event::class =>
                'app\Infrastructure\Repo\Event\EloquentEventPersistenceFactory'
        ];

        if (array_key_exists($targetClass, $factoryMap)) {
            return new $factoryMap[ $targetClass ]();
        }

        throw new \Exception("No Eloquent Persistence Factory for $targetClass exists");
    }
}
