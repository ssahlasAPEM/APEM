<?php namespace app\Services\Api\Json\V1;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/12/16
 * Time: 12:16 PM
 */

use app\Core\Event\Model\Event;
use app\Core\Opportunity\Repository\OpportunityInterface;
use app\Core\Shared\ComplexCollection;

/**
 * Class OpportunityService
 * @package app\Services\Api\Json\V1
 */
class OpportunityService extends RESTFULService
{

    /**
     * @param OpportunityInterface $opportunityInterface
     */
    public function __construct(OpportunityInterface $opportunityInterface)
    {
        parent::__construct();
        $this->interface = $opportunityInterface;
    }

    /**
     * Fetch a single page of data
     *
     * @param $limit
     * @param $offset
     * @param $filter
     *
     * @return mixed
     */
    public function fetchPageFiltered($limit, $offset, $filter)
    {
        try {
            $array = $this->interface->findAllPaginatedFiltered($limit, $offset, $filter);

            return $array;
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }
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
}
