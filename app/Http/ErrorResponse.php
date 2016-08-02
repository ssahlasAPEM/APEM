<?php namespace App\Http;

/**
 * Created by Curious Minds Media.
 * User: Zachary Hamm (hamm.zachary@gmail.com)
 * Date: 12/09/15
 * Time: 03:27 PM
 */

class ErrorResponse
{

    private $title;
    private $details;

    /**
     * ErrorResponse constructor.
     *
     * @param string $title
     * @param string $details
     * @param int    $statusCode
     */
    public function __construct($title = "An unknown error occurred", $details = "", $statusCode = 500, $errorCode = null, $meta = null)
    {
        $this->title      = $title;
        $this->details    = $details;
        $this->statusCode = $statusCode;
        $this->errorCode  = $errorCode;
        $this->meta       = $meta;
    }

    /**
     * @param $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param $details
     */
    public function setDetails($details)
    {
        $this->details = $details;
    }

    /**
     * @return string
     */
    public function getDetails()
    {
        return $this->details;
    }

    /**
     * @param $statusCode
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;
    }

    /**
     * @return int
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * Not an HTTP code, but an internal error code used to easily distinguish
     * errors
     *
     * @param $errorCode
     */
    public function setErrorCode($errorCode)
    {
        $this->errorCode = $errorCode;
    }

    /**
     * @return int
     */
    public function getErrorCode()
    {
        return $this->errorCode;
    }

    /**
     * Metadata for this error
     *
     * @param $meta
     */
    public function setMeta($meta)
    {
        $this->meta = $meta;
    }

    /**
     * @return mixed
     */
    public function getMeta()
    {
        return $this->meta;
    }
}
