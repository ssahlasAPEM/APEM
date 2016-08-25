<?php namespace app\Infrastructure\Repo\Opportunity;

/**
 * Created by Curious Minds Media.
 * Opportunity: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;
use app\Core\Opportunity\Model\Opportunity;
use app\Core\Opportunity\Repository\OpportunityInterface;
use app\Exceptions\ForbiddenException;
use app\Exceptions\InvalidRequestException;
use app\Infrastructure\AbstractEloquentMapper;
use app\Models\Event;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
            $queryRev = $this->getQueryModel()
                ->select(
                    DB::raw('sum(potential_annual_rev) as total_revenue')
                )->where('user_id','=',Auth::user()->id);
        } else {
            $query = $this->getQueryModel()
                ->where('draft','=',0)
                ->orWhere('draft','=','1')
                ->where('user_id','=',Auth::user()->id);
            $queryRev = $this->getQueryModel()
                ->select(
                    DB::raw('sum(potential_annual_rev) as total_revenue')
                );
        }

        foreach($filter AS $key => $value) {
            $dataPoint = str_replace('-', '_', $key);
            $query = $query->where($dataPoint, 'like', '%'.$value.'%');
            $queryRev = $queryRev->where($dataPoint, 'like', '%'.$value.'%');
        }

        $results = $query
            ->orderBy('id', 'asc')
            ->paginate($limit);
        $totalRevenue = $queryRev->get();

        $collection  = $this->getCollection($results->toArray()['data']);

        return $this->addMetaInfo($limit, $offset, $results->total(), $collection, $totalRevenue->toArray()[0]['total_revenue']);

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
            $result = $this->getQueryModel()
                ->where('user_id','=',Auth::user()->id)
                ->orderBy('id', 'asc')
                ->paginate($limit);
            $collection = $this->getCollection($result->toArray()['data']);

            $queryRev = $this->getQueryModel()
                ->select(
                    DB::raw('sum(potential_annual_rev) as total_revenue')
                )->where('user_id','=',Auth::user()->id);
            $totalRevenue = $queryRev->get();

            return $this->addMetaInfo($limit, $page, $result->total(), $collection, $totalRevenue->toArray()[0]['total_revenue']);
        }

        $result = $this->getQueryModel()
            ->where('draft','=',0)
            ->orWhere('draft','=','1')
            ->where('user_id','=',Auth::user()->id)
            ->orderBy('id', 'asc')
            ->paginate($limit);
        $collection = $this->getCollection($result->toArray()['data']);

        $queryRev = $this->getQueryModel()
            ->select(
                DB::raw('sum(potential_annual_rev) as total_revenue')
            );
        $totalRevenue = $queryRev->get();

        return $this->addMetaInfo($limit, $page, $result->total(), $collection, $totalRevenue->toArray()[0]['total_revenue']);
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

            $event = new Event();
            $event->type = "create";
            $event->opportunity_id = $newOpportunity->id;
            $event->save();
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
     * Updates an existing DomainEntity object and returns it
     *
     * @param DomainEntity $object
     *
     * @return DomainEntity
     * @throws ObjectNotFoundException
     * @throws \Exception
     */
    public function update(DomainEntity $object)
    {
        $model = $this->getQueryModel();
        $model = $model->where('id', '=', $object->getId())->first();

        // Get current stage and status
        $currStage = $model->stage;
        $currStatus = $model->status;

        if ($model === null) {
            throw new ObjectNotFoundException($this->targetClass(), $object->getId());
        }

        $model = $this->doStoreMapping($model, $object, true);
        $model->save();

        // Generate update event
        $event = new Event();
        $event->type = "update";
        $event->opportunity_id = $model->id;
        $event->save();

        // Check if we need to generate a stage / status event
        if($currStage !== $model->stage) {
            $event = new Event();
            $event->type = $currStage;
            $event->opportunity_id = $model->id;
            $event->save();
        }

        if($currStatus !== $model->status) {
            $event = new Event();
            $event->type = $model->status;
            $event->opportunity_id = $model->id;
            $event->save();
        }

        // return the object
        $obj = $this->createObject($model->toArray());

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
