<?php namespace App\Exceptions;

/**
 * Created by Curious Minds Media.
 * User: Zachary Hamm (hamm.zachary@gmail.com)
 * Date: 03/21/16
 * Time: 03:09 PM
 */

use Exception;

/**
 * Class InvalidStreamException
 * @package App\Exceptions
 */
class InvalidStreamException extends Exception
{

    const NO_ROOT_NODE         = 601;
    const CIRCULAR_STREAM      = 602;
    const INVALID_ANSWER       = 603;
    const CHILD_DOES_NOT_EXIST = 604;
    const INVALID_ACTIVE_PATH  = 605;

    public $streamType;
    public $streamId;
    public $node;
    public $details;
    public $errorCode;

    /**
     * InvalidStreamException constructor.
     *
     * @param string    $errorCode
     * @param int       $streamType
     * @param Exception $streamId
     * @param           $node
     * @param null      $details
     *
     * @internal param string $detail
     */
    public function __construct($errorCode, $streamType, $streamId, $node, $details = null)
    {
        $this->errorCode  = $errorCode;
        $this->streamType = $streamType;
        $this->streamId   = $streamId;
        $this->node       = $node;
        $this->details    = $details;

        switch ($errorCode) {
            case self::NO_ROOT_NODE:
                $this->noRootNode();
                break;

            case self::CIRCULAR_STREAM:
                $this->circularStream();
                break;

            case self::INVALID_ANSWER:
                $this->invalidAnswer();
                break;

            case self::CHILD_DOES_NOT_EXIST:
                $this->noChild();
                break;

            case self::INVALID_ACTIVE_PATH:
                $this->invalidActivePath();
                break;

            default:
                $this->unknownError();
        }
    }

    public function noRootNode()
    {
        $this->message = "Cannot find root node for " . $this->streamType . " " . $this->streamId;
    }

    public function circularStream()
    {
        $this->message = "Circular stream! Node " . $this->node->getId() . " occurs at least twice in " . $this->streamType . " " . $this->streamId;
    }

    public function invalidAnswer()
    {
        $this->message = "Selected answer \"" . $this->details[0] . "\" on node " . $this->node->getId() . " is not one of the possible answers";
    }

    public function noChild()
    {
        $this->message = "Child id " . $this->details[0] . " of node " . $this->node->getId() . " does not exist";
    }

    public function invalidActivePath()
    {
        $this->message = "Node " . $node->getId() . " has invalid active path pointer to node " . $details[0];
    }

    public function unknownError()
    {
        $this->message = "Unknown error for " . $this->streamType . " " . $this->streamId;
    }
}
