<?php namespace App\Infrastructure\Repo\Field;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\Field\Model\Field;
use App\Infrastructure\AbstractDomainEntityFactory;

/**
 * Class EloquentFieldEntityFactory
 * @package App\Infrastructure\Repo\Field
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
