<?php namespace app\Core\Shared;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:33 PM
 */

class ComplexCollection
{

    private $primaryObject;
    private $included;

    /**
     * ComplexCollection constructor.
     *
     * @param $primaryObject
     * @param $included
     */
    public function __construct($primaryObject, $included)
    {
        $this->primaryObject = $primaryObject;
        $this->included      = $included;
    }

    public function getPrimary()
    {
        return $this->primaryObject;
    }

    public function getIncluded()
    {
        return $this->included;
    }
}
