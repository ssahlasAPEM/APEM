<?php namespace app\Services\Api\Json\V1;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:19 PM
 */

use app\Core\Event\Model\Event;
use app\Core\Shared\ComplexCollection;
use app\Exceptions\InvalidRequestException;
use app\Http\ErrorResponseFactory;

/**
 * Class RESTFULService
 * @package app\Services\Api\Json\V1
 */
abstract class RESTFULService
{

    /**
     * The model's interface
     */
    protected $interface;

    private $validIncludes = [];
    protected $errorResponseFactory;

    /**
     * RESTFULService constructor.
     */
    protected function __construct()
    {
        $this->errorResponseFactory = new ErrorResponseFactory;
        $this->setValidIncludes(['custom']);
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
            $oppEntity = $this->getInterface()->find($dbId);

            $eventCollection = $oppEntity->getRelated(Event::class, null, null);

            return new ComplexCollection($oppEntity, $eventCollection);
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }
    }

    /**
     * Fetch a single page of data
     *
     * @param $limit
     * @param $offset
     *
     * @return mixed
     */
    public function fetchPage($limit = null, $offset = null)
    {
        try {
            if (is_null($limit) && is_null($offset)) {
                $array = $this->interface->findAll();

                return $array;
            }

            $array = $this->interface->findAllPaginated($limit, $offset);

            return $array;
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }
    }

    /**
     * Fetch a single page of data where the name is similar to $name
     *
     * @param $limit
     * @param $offset
     * @param $name
     *
     * @return mixed
     */
    public function fetchPageByName($limit, $offset, $name)
    {
        try {
            $array = $this->interface->searchByNamePaginated($limit, $offset, $name);
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }

        return $array;
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

    /**
     * @param $method
     *
     * @return \app\Http\ErrorResponse
     */
    public function methodUnsupported($method)
    {
        $unsupporteException = new InvalidRequestException("Service $method not supported at this time.");

        return $this->errorResponseFactory->makeErrorResponse($unsupporteException);
    }

    /**
     * @return mixed
     */
    public function getInterface()
    {
        return $this->interface;
    }
}
