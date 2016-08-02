<?php namespace app\Exceptions;

/**
 * Created by Curious Minds Media.
 * User: Zachary Hamm (hamm.zachary@gmail.com)
 * Date: 05/13/16
 * Time: 02:13 PM
 */

use Exception;

/**
 * Class VersionMismatchException
 * @package app\Exceptions
 */
class VersionMismatchException extends Exception
{

    /**
     * VersionMismatchException constructor.
     *
     * @param string $detail
     */
    public function __construct($detail = '')
    {
        parent::__construct($detail);
    }
}
