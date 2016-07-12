<?php namespace App\Services\Api\Json\V1;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/12/16
 * Time: 12:16 PM
 */

use App\Core\Opportunity\Repository\OpportunityInterface;

/**
 * Class OpportunityService
 * @package App\Services\Api\Json\V1
 */
class OpportunityService extends RESTFULService
{

    /**
     * @var OpportunityInterface
     */
    private $opportunityInterface;

    /**
     * @param OpportunityInterface $opportunityInterface
     */
    public function __construct(OpportunityInterface $opportunityInterface)
    {
        parent::__construct();
        $this->opportunityInterface = $opportunityInterface;
        $this->setValidIncludes(['custom']);
    }

    public function getInterface()
    {
        return $this->opportunityInterface;
    }

    /**
     * Fetch a single page of data where the opportunity's label is similar to $label
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
            $opportunities = $this->opportunityInterface->searchByNamePaginated($limit, $offset, $label);
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }

        return $opportunities;
    }

    /**
     * Fetch a single page of data
     *
     * @param $limit
     * @param $offset
     *
     * @return mixed
     */
    public function fetchPage($limit, $offset)
    {
        try {
            if (is_null($limit) && is_null($offset)) {
                $opportunities = $this->opportunityInterface->findAll();

                return $opportunities;
            }

            $opportunities = $this->opportunityInterface->findAllPaginated($limit, $offset);

            return $opportunities;
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }
    }
}
