<?php namespace app\Exceptions;

/**
 * Created by Curious Minds Media.
 * User: Zachary Hamm (hamm.zachary@gmail.com)
 * Date: 02/18/16
 * Time: 01:46 PM
 */

use Exception;

/**
 * Class ForbiddenException
 * @package app\Exceptions
 */
class ForbiddenException extends Exception
{

    /**
     * ForbiddenException constructor.
     *
     * @param string $detail
     */
    public function __construct($detail = '')
    {
        parent::__construct($detail);
    }
}
