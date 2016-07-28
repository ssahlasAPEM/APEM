<?php namespace App\Services\Api\Json\V1;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/12/16
 * Time: 12:16 PM
 */

use App\Core\Field\Repository\FieldInterface;

/**
 * Class UserService
 * @package App\Services\Api\Json\V1
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
