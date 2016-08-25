<?php namespace app\Core\Shared;

/**
 * Created by Curious Minds Media, Inc.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/25/16
 * Time: 12:39 PM
 */

use Exception;

/**
 * Class HelperFactory
 * @package app\Core\Shared
 */
class HelperFactory
{

    /**
     * @param $type
     *
     * @return mixed
     * @throws Exception
     */
    public static function getMapper($type)
    {
        $reflection = new \ReflectionClass($type);

        $interfaceName = '\\Repository\\' . $reflection->getShortName() . 'Interface';
        $interfacePath = $reflection->getNamespaceName();

        $mapperInterface = join('\\', array_slice(explode('\\', $interfacePath), 0, - 1)) . $interfaceName;

        if (interface_exists($mapperInterface)) {
            return app()->make($mapperInterface);
        }

        throw new Exception("Unknown: $mapperInterface in HelperFactory");
    }

    /**
     * Get the Collection form the Domain Type
     *
     * @param $type
     *
     * @return mixed
     * @throws Exception
     */
    public static function getCollection($type)
    {
        $reflection = new \ReflectionClass($type);

        $class = $reflection->getShortName();

        $collection = 'app\Infrastructure\Repo\\' . $class . '\\' . $class . 'Collection';

        if (class_exists($collection)) {
            return new $collection();
        }

        throw new Exception("Unknown: $collection in HelperFactory");
    }
}
