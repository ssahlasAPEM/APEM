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
use Illuminate\Support\Facades\Auth;

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
     * @param $filter
     *
     * @return mixed
     * @throws \Exception
     */
    public function findAllPaginatedFiltered($limit, $offset, $filter)
    {
        if(Auth::user()->type !== 'Admin') {
            $query = $this->getQueryModel()
                ->where('user_id','=',Auth::user()->id);
        } else {
            $query = $this->getQueryModel();
        }

        foreach($filter AS $key => $value) {
            $dataPoint = str_replace('-', '_', $key);
            $query = $query->where($dataPoint, 'like', '%'.$value.'%');
        }

        $results = $query
            ->orderBy('id', 'asc')
            ->paginate($limit);
        $collection  = $this->getCollection($results->toArray()['data']);
        return $this->addMetaInfo($limit, $offset, $results->total(), $collection/*, ['filter' => $filter]*/);

        // method for lower casing and escaping characters
        //$escapedName = str_replace(['%', '_'], ['\%', '\_'], strtolower($name));
    }

    /**
     * Return a 'paginated' collection of DomainEntity objects
     *
     * @param      $limit Per-page limit
     * @param      $page  'Page'
     *
     * @return TypedCollection A collection of the DomainEntity objects found
     * @throws ForbiddenException
     */
    public function findAllPaginated($limit, $page)
    {
        if(Auth::user()->type !== 'Admin') {
            $result = $this->getQueryModel()->where('user_id','=',Auth::user()->id)->orderBy('id', 'asc')->paginate($limit);
            $collection = $this->getCollection($result->toArray()['data']);
            return $this->addMetaInfo($limit, $page, $result->total(), $collection);
        }

        return parent::findAllPaginated($limit, $page);
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
