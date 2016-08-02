<?php namespace app\Services\Api\Json\ResponseMacro;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:29 PM
 */

use app\Core\Field\Model\Field;

/**
 * Class FieldResponseMacro
 * @package app\Services\Api\Json\ResponseMacro
 */
class FieldResponseMacro extends AbstractResponseMacro
{

    /**
     * @return string
     */
    public function responseType()
    {
        return 'field';
    }

    public function targetClass()
    {
        return Field::class;
    }
}
