<?php namespace App\Infrastructure\Repo\Field;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\DomainEntity;
use App\Core\Field\Model\Field;
use App\Core\Field\FieldCollectionInterface;
use App\Core\Shared\TypedCollection;

/**
 * Class FieldCollection
 * @package App\Infrastructure\Repo\Field
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
