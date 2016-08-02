<?php namespace app\Exceptions;

/**
 * Created by Curious Minds Media.
 * User: Zachary Hamm (hamm.zachary@gmail.com)
 * Date: 12/09/15
 * Time: 03:46 PM
 */

use Exception;

/**
 * Class ObjectNotFoundException
 * @package app\Exceptions
 */
class ObjectNotFoundException extends Exception
{

    /**
     * ObjectNotFoundException constructor.
     *
     * @param string $type
     * @param int    $dbId
     */
    public function __construct($type, $dbId)
    {
        $msg = "$type $dbId not found.";
        parent::__construct($msg);
    }
}
