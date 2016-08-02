<?php namespace app\Services\Api\Json\V1;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/12/16
 * Time: 12:16 PM
 */

use app\Core\Field\Repository\FieldInterface;

/**
 * Class UserService
 * @package app\Services\Api\Json\V1
 */
class FieldService extends RESTFULService
{

    /**
     * @param FieldInterface $interface
     */
    public function __construct(FieldInterface $interface)
    {
        parent::__construct();
        $this->interface = $interface;
    }
}
