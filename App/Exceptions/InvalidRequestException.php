<?php namespace App\Exceptions;

/**
 * Created by Curious Minds Media.
 * User: Zachary Hamm (hamm.zachary@gmail.com)
 * Date: 12/11/15
 * Time: 11:54 AM
 */

use Exception;

/**
 * Class InvalidRequestException
 * @package App\Exceptions
 */
class InvalidRequestException extends Exception
{

    /**
     * InvalidRequestException constructor.
     *
     * @param string $detail
     */
    public function __construct($detail = '')
    {
        parent::__construct($detail);
    }
}
