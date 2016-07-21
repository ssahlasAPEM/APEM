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
     * @var FieldInterface
     */
    private $fieldInterface;

    /**
     * @param FieldInterface $fieldInterface
     */
    public function __construct(FieldInterface $fieldInterface)
    {
        parent::__construct();
        $this->fieldInterface = $fieldInterface;
        $this->setValidIncludes(['custom']);
    }

    public function getInterface()
    {
        return $this->fieldInterface;
    }

    /**
     * Fetch a single page of data where the field's label is similar to $label
     *
     * @param $limit
     * @param $offset
     * @param $label
     *
     * @return mixed
     */
    public function fetchPageByName($limit, $offset, $label)
    {
        try {
            $fields = $this->fieldInterface->searchByNamePaginated($limit, $offset, $label);
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }

        return $fields;
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
                $fields = $this->fieldInterface->findAll();

                return $fields;
            }

            $fields = $this->fieldInterface->findAllPaginated($limit, $offset);

            return $fields;
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }
    }
}
