<?php namespace app\Infrastructure\Repo\Field;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\Field\Model\Field;
use app\Infrastructure\AbstractDomainEntityFactory;

/**
 * Class EloquentFieldEntityFactory
 * @package app\Infrastructure\Repo\Field
 */
class EloquentFieldEntityFactory extends AbstractDomainEntityFactory
{

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return Field::class;
    }
}
