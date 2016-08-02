<?php namespace app\Infrastructure\Repo\Field;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;
use app\Core\Field\FieldCollectionInterface;
use app\Core\Field\Model\Field;
use app\Core\Shared\TypedCollection;

/**
 * Class FieldCollection
 * @package app\Infrastructure\Repo\Field
 */
class FieldCollection extends TypedCollection implements FieldCollectionInterface
{

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return Field::class;
    }

    /**
     * @param DomainEntity $field
     *
     * @return mixed|void
     */
    public function add(DomainEntity $field)
    {
        // TODO: Implement add() method.
    }
}
