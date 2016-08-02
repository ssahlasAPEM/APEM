<?php namespace app\Services\Api\Json\V1;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:19 PM
 */

use app\Core\User\Repository\UserInterface;

/**
 * Class UserService
 * @package app\Services\Api\Json\V1
 */
class UserService extends RESTFULService
{

    /**
     * @param UserInterface $interface
     */
    public function __construct(UserInterface $interface)
    {
        parent::__construct();
        $this->interface = $interface;
    }
}
