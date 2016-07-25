<?php namespace App\Services\Api\Json\V1;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:19 PM
 */

use App\Exceptions\InvalidRequestException;
use App\Http\ErrorResponseFactory;

/**
 * Class RESTFULService
 * @package App\Services\Api\Json\V1
 */
abstract class RESTFULService
{

    private $validIncludes = [];
    protected $errorResponseFactory;

    /**
     * RESTFULService constructor.
     */
    protected function __construct()
    {
        $this->errorResponseFactory = new ErrorResponseFactory;
    }

    /**
     * @param array $validIncludes
     */
    protected function setValidIncludes(array $validIncludes)
    {
        $this->validIncludes = $validIncludes;
    }

    /**
     * @return array
     */
    protected function getValidIncludes()
    {
        return $this->validIncludes;
    }

    /**
     * @return array
     * @throws InvalidRequestException
     */
    protected function parseIncludeFilter()
    {
        /* XXX: These validations should be somehow shipped off to the Laravel Request layer */
        if (request()->input('include')) {
            $include = request()->input('include');
            if (!in_array($include, $this->getValidIncludes())) {
                throw new InvalidRequestException("Cannot include $include type objects");
            }

            if (!request()->input('filter')) {
                // We CAN include without a filter, it would just be include all
                // Andrew Engstrom, 04/08/2016
                //throw new InvalidRequestException('Cannot include without a filter');
            }

            $filter = request()->input('filter');
            $fields = explode(',', $filter);

            if (empty($fields)) {
                throw new InvalidRequestException('Invalid filter fieldset.');
            }

            return [$include, $fields];
        }

        return [null, null];
    }

    /**
     * @param $dbId
     *
     * @return mixed
     */
    public function find($dbId)
    {
        try {
            return $this->getInterface()->find($dbId);
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }
    }

    /**
     * @param $limit
     * @param $offset
     *
     * @return mixed
     */
    public function fetchPage($limit, $offset)
    {
        try {
            $limit  = intval($limit);
            $offset = intval($offset);

            $entities = $this->getInterface()->findAllPaginated($limit, $offset);
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }

        return $entities;
    }

    /**
     * @param array $jsonArray
     *
     * @return mixed
     */
    public function create(array $jsonArray)
    {
        try {
            $entity = $this->getInterface()->createObjectFromJson($jsonArray);

            return $this->getInterface()->create($entity);
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }
    }

    /**
     * @param array $jsonArray
     *
     * @return mixed
     */
    public function update(array $jsonArray)
    {
        try {
            $entity = $this->getInterface()->createObjectFromJson($jsonArray);

            return $this->getInterface()->update($entity);
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }
    }

    /**
     * @param $dbId
     *
     * @return mixed
     */
    public function delete($dbId)
    {
        try {
            return $this->getInterface()->delete($dbId);
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }
    }

    /**
     * @param      $relatedClass
     * @param      $dbId
     * @param      $limit
     * @param      $page
     * @param null $fields
     *
     * @return mixed
     * @throws \Exception
     */
    public function fetchRelated($relatedClass, $dbId, $limit, $page, $fields = null)
    {
        try {
            $entity = $this->getInterface()->find($dbId);

            return $entity->getRelated($relatedClass, $limit, $page, $fields);
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }
    }

    public function methodUnsupported($method)
    {
        $unsupporteException = new InvalidRequestException("Service $method not supported at this time.");

        return $this->errorResponseFactory->makeErrorResponse($unsupporteException);
    }

    abstract public function getInterface();
}
