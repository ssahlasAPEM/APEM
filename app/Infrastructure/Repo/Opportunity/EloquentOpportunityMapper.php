<?php namespace app\Infrastructure\Repo\Opportunity;

/**
 * Created by Curious Minds Media.
 * Opportunity: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\Opportunity\Model\Opportunity;
use app\Core\Opportunity\Repository\OpportunityInterface;
use app\Exceptions\ForbiddenException;
use app\Exceptions\InvalidRequestException;
use app\Infrastructure\AbstractEloquentMapper;

/**
 * Class EloquentOpportunityMapper
 * @package app\Infrastructure\Repo\Opportunity
 */
class EloquentOpportunityMapper extends AbstractEloquentMapper implements OpportunityInterface
{

    /**
     * Search by name paginated
     *
     * @param $limit
     * @param $offset
     * @param $name
     *
     * @return mixed
     * @throws \Exception
     */
    public function searchByNamePaginated($limit, $offset, $name)
    {
        $escapedName = str_replace(['%', '_'], ['\%', '\_'], strtolower($name));
        $result      = $this->getQueryModel()
            ->whereRaw('LOWER(name) LIKE ?', ['%' . $escapedName . '%'])
            ->orderBy('id', 'asc')
            ->paginate($limit);
        $collection  = $this->getCollection($result->toArray()['data']);

        return $this->addMetaInfo($limit, $offset, $result->total(), $collection, ['name' => $name]);
    }

    /**
     * @param $opportunity
     *
     * @return mixed
     * @throws ForbiddenException
     * @throws InvalidRequestException
     */
    public function create($opportunity)
    {
        try {
            $newOpportunity = $this->getQueryModel();
            $newOpportunity = $this->doStoreMapping($newOpportunity, $opportunity, false);
            $newOpportunity->save();
        } catch (\PDOException $exception) {
            if ($exception->getCode() === 23505) {
                throw new InvalidRequestException('A opportunity with that label already exists');
            }

            throw $exception;
        }

        $obj = $this->createObject($newOpportunity->toArray());

        return $obj;
    }

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return Opportunity::class;
    }
}
