<?php namespace app\Infrastructure;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

abstract class AbstractPersistenceFactory
{

    abstract public function getMapper();

    abstract public function getDomainEntityFactory();

    /**
     * @param array $array
     *
     * @return mixed
     */
    abstract public function getCollection(array $array);

    /**
     * @codeCoverageIgnore
     *
     * @param $targetClass
     *
     * @throws \Exception
     */
    public static function getFactory($targetClass)
    {
        throw new \Exception("No Persistence Factory for $targetClass exists");
    }
}
