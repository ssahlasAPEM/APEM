<?php namespace app\Infrastructure\Repo\Event;

/**
 * Created by Curious Minds Media.
 * Event: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/13/16
 * Time: 4:00 PM
 */

use app\Core\Event\Model\Event;
use app\Core\Event\Repository\EventInterface;
use app\Exceptions\ForbiddenException;
use app\Exceptions\InvalidRequestException;
use app\Infrastructure\AbstractEloquentMapper;

/**
 * Class EloquentEventMapper
 * @package app\Infrastructure\Repo\Event
 */
class EloquentEventMapper extends AbstractEloquentMapper implements EventInterface
{

    /**
     * @param $event
     *
     * @return mixed
     * @throws ForbiddenException
     * @throws InvalidRequestException
     */
    public function create($event)
    {
        try {
            $newEvent = $this->getQueryModel();
            $newEvent = $this->doStoreMapping($newEvent, $event, false);
            $newEvent->save();
        } catch (\PDOException $exception) {
            if ($exception->getCode() === 23505) {
                throw new InvalidRequestException('A event with this data already exists');
            }

            throw $exception;
        }

        $obj = $this->createObject($newEvent->toArray());

        return $obj;
    }

    /**
     * Finds Events that contain this specific $opportunityId
     *
     * @param $opportunityId
     *
     * @return EventCollection
     */
    public function findByOpportunityId($opportunityId)
    {
        $result = $this->getQueryModel()
            ->where('opportunity_id', '=', intval($opportunityId))
            ->orderBy('id', 'asc')
            ->get();

        $responseArray = $result->toArray();

        return $this->getCollection($responseArray);
    }

    /**
     * Finds Events that contain this specific $opportunityId, paginated
     *
     * @param $opportunityId
     * @param $limit
     * @param $page
     *
     * @return EventCollection
     */
    public function findByOpportunityIdPaginated($opportunityId, $limit, $page)
    {
        $result = $this->getQueryModel()
            ->where('opportunity_id', '=', intval($opportunityId))
            ->orderBy('id', 'asc')
            ->paginate($limit);

        $collection = $this->getCollection($result->toArray()['data']);

        return $this->addMetaInfo($limit, $page, $result->total(), $collection);
    }

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return Event::class;
    }
}
