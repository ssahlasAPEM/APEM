<?php namespace App\Infrastructure\Repo\Field;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\Field\Repository\FieldInterface;
use App\Infrastructure\AbstractEloquentPersistenceFactory;

/**
 * Class EloquentFieldPersistenceFactory
 * @package App\Infrastructure\Repo\Field
 */
class EloquentFieldPersistenceFactory extends AbstractEloquentPersistenceFactory
{

    /**
     * @return mixed
     */
    public function getMapper()
    {
        return app()->make(FieldInterface::class);
    }

    /**
     * @return EloquentFieldEntityFactory
     */
    public function getDomainEntityFactory()
    {
        return new EloquentFieldEntityFactory();
    }

    /**
     * @param array $array
     *
     * @return UserCollection
     */
    public function getCollection(array $array)
    {
        return new FieldCollection($array, $this->getDomainEntityFactory());
    }
}
