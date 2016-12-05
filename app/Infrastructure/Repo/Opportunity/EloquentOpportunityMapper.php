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
use DateTime;
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
    public function findAllPaginatedFiltered($limit = null, $offset = null, $filter)
    {
        $query    = $this->getQueryModel();
        $queryRev = $this->getQueryModel();

        if (Auth::user()->type != 'Admin') {
            $query    = $query
                ->where('user_id', '=', Auth::user()->id);
            $queryRev = $queryRev
                ->select(
                    DB::raw('sum(potential_annual_rev) as total_revenue')
                )->where('user_id', '=', Auth::user()->id);
        } else {
            $query    = $query->where(
                function ($query) {
                    $query->where('draft', '=', 0)
                        ->orWhere('draft', '=', '1')
                        ->where('user_id', '=', Auth::user()->id);
                }
            );
            $queryRev = $queryRev
                ->select(
                    DB::raw('sum(potential_annual_rev) as total_revenue')
                )->where(function ($queryRev) {
                    $queryRev->where('draft', '=', 0)
                        ->orWhere('draft', '=', '1')
                        ->where('user_id', '=', Auth::user()->id);
                }
            );
        }

        // Add orderBy and orderDir vars here to be set within loop
        $orderBy = null;
        $orderDir = null;
        foreach ($filter AS $key => $value) {

            if (strlen($value) > 0) {
                switch ($key) {
                    case 'orderBy':
                        $orderBy = $value;
                        break;
                    case 'orderDir':
                        $orderDir = $value;
                        break;
                    case 'lastThirtyDays':
                        if ($value == 'true') {
                            $query    = $query->whereDate('created_at', '>=', date('Y-m-d', strtotime("-30 days")));
                            $queryRev = $queryRev->whereDate('created_at', '>=', date('Y-m-d', strtotime("-30 days")));
                        }
                        break;
                    case 'dateEntered':
                        $dateEntered = DateTime::createFromFormat('m-d-Y', $value)->format('Y-m-d');
                        $query       = $query->whereDate('created_at', '=', $dateEntered);
                        $queryRev    = $queryRev->whereDate('created_at', '=', $dateEntered);
                        break;
                    case 'startDate':
                        $startDate = DateTime::createFromFormat('m-d-Y', $value)->format('Y-m-d');
                        $query     = $query->whereDate('created_at', '>=', $startDate);
                        $queryRev  = $queryRev->whereDate('created_at', '>=', $startDate);
                        break;
                    case 'endDate':
                        $endDate  = DateTime::createFromFormat('m-d-Y', $value)->format('Y-m-d');
                        $query    = $query->whereDate('created_at', '<=', $endDate);
                        $queryRev = $queryRev->whereDate('created_at', '<=', $endDate);
                        break;
                    case 'estimatedProdDate':
                        $estimatedProdDate = DateTime::createFromFormat('m-d-Y', $value)->format('Y-m-d');
                        $query             = $query->whereDate('estimated_prod_date', '=', $estimatedProdDate);
                        $queryRev          = $queryRev->whereDate('estimated_prod_date', '=', $estimatedProdDate);
                        break;
                    case 'searchString':
                        $query    = $query->where(
                            function ($query) use (&$value) {
                                $query->where('draft', 'like', '%' . $value . '%')
                                    ->orWhere('id', 'like', '%' . $value . '%')
                                    ->orWhere('stage', 'like', '%' . $value . '%')
                                    ->orWhere('company', 'like', '%' . $value . '%')
                                    ->orWhere('address', 'like', '%' . $value . '%')
                                    ->orWhere('city', 'like', '%' . $value . '%')
                                    ->orWhere('state_county', 'like', '%' . $value . '%')
                                    ->orWhere('mail_code', 'like', '%' . $value . '%')
                                    ->orWhere('country', 'like', '%' . $value . '%')
                                    ->orWhere('contact_name', 'like', '%' . $value . '%')
                                    ->orWhere('contact_title', 'like', '%' . $value . '%')
                                    ->orWhere('contact_phone', 'like', '%' . $value . '%')
                                    ->orWhere('contact_email', 'like', '%' . $value . '%')
                                    ->orWhere('sales_rep_agent', 'like', '%' . $value . '%')
                                    ->orWhere('distributor', 'like', '%' . $value . '%')
                                    ->orWhere('apem_sales_person', 'like', '%' . $value . '%')
                                    ->orWhere('sra_sales_rep', 'like', '%' . $value . '%')
                                    ->orWhere('distributor_salesperson', 'like', '%' . $value . '%')
                                    ->orWhere('industry', 'like', '%' . $value . '%')
                                    ->orWhere('application', 'like', '%' . $value . '%')
                                    ->orWhere('reason_for_opp', 'like', '%' . $value . '%')
                                    ->orWhere('function', 'like', '%' . $value . '%')
                                    ->orWhere('catalog_part_num', 'like', '%' . $value . '%')
                                    ->orWhere('customer_part_num', 'like', '%' . $value . '%')
                                    ->orWhere('product_type', 'like', '%' . $value . '%')
                                    ->orWhere('product_series', 'like', '%' . $value . '%')
                                    ->orWhere('apem_part_num', 'like', '%' . $value . '%')
                                    ->orWhere('brief_description', 'like', '%' . $value . '%')
                                    ->orWhere('extended_description', 'like', '%' . $value . '%')
                                    ->orWhere('current_supplier', 'like', '%' . $value . '%')
                                    ->orWhere('competitors', 'like', '%' . $value . '%')
                                    ->orWhere('year1_sales_vol', 'like', '%' . $value . '%')
                                    ->orWhere('year2_sales_vol', 'like', '%' . $value . '%')
                                    ->orWhere('year3_sales_vol', 'like', '%' . $value . '%')
                                    ->orWhere('currency', 'like', '%' . $value . '%')
                                    ->orWhere('target_sales_price', 'like', '%' . $value . '%')
                                    ->orWhere('potential_annual_rev', 'like', '%' . $value . '%')
                                    ->orWhere('probability_of_win', 'like', '%' . $value . '%')
                                    ->orWhere('expected_value', 'like', '%' . $value . '%')
                                    ->orWhere('quote_date', 'like', '%' . $value . '%')
                                    ->orWhere('sample_date', 'like', '%' . $value . '%')
                                    ->orWhere('approval_date', 'like', '%' . $value . '%')
                                    ->orWhere('date_rcvd_prod_order', 'like', '%' . $value . '%')
                                    ->orWhere('prod_sales_order_num', 'like', '%' . $value . '%')
                                    ->orWhere('reason_for_win', 'like', '%' . $value . '%')
                                    ->orWhere('date_lost', 'like', '%' . $value . '%')
                                    ->orWhere('lost_to_whom', 'like', '%' . $value . '%')
                                    ->orWhere('reason_for_loss', 'like', '%' . $value . '%')
                                    ->orWhere('comment_field', 'like', '%' . $value . '%')
                                    ->orWhere('user_id', 'like', '%' . $value . '%');
                            }
                        );
                        $queryRev = $queryRev->where(
                            function ($queryRev) use (&$value) {
                                $queryRev->where('draft', 'like', '%' . $value . '%')
                                    ->orWhere('id', 'like', '%' . $value . '%')
                                    ->orWhere('stage', 'like', '%' . $value . '%')
                                    ->orWhere('company', 'like', '%' . $value . '%')
                                    ->orWhere('address', 'like', '%' . $value . '%')
                                    ->orWhere('city', 'like', '%' . $value . '%')
                                    ->orWhere('state_county', 'like', '%' . $value . '%')
                                    ->orWhere('mail_code', 'like', '%' . $value . '%')
                                    ->orWhere('country', 'like', '%' . $value . '%')
                                    ->orWhere('contact_name', 'like', '%' . $value . '%')
                                    ->orWhere('contact_title', 'like', '%' . $value . '%')
                                    ->orWhere('contact_phone', 'like', '%' . $value . '%')
                                    ->orWhere('contact_email', 'like', '%' . $value . '%')
                                    ->orWhere('sales_rep_agent', 'like', '%' . $value . '%')
                                    ->orWhere('distributor', 'like', '%' . $value . '%')
                                    ->orWhere('apem_sales_person', 'like', '%' . $value . '%')
                                    ->orWhere('sra_sales_rep', 'like', '%' . $value . '%')
                                    ->orWhere('distributor_salesperson', 'like', '%' . $value . '%')
                                    ->orWhere('industry', 'like', '%' . $value . '%')
                                    ->orWhere('application', 'like', '%' . $value . '%')
                                    ->orWhere('reason_for_opp', 'like', '%' . $value . '%')
                                    ->orWhere('function', 'like', '%' . $value . '%')
                                    ->orWhere('catalog_part_num', 'like', '%' . $value . '%')
                                    ->orWhere('customer_part_num', 'like', '%' . $value . '%')
                                    ->orWhere('product_type', 'like', '%' . $value . '%')
                                    ->orWhere('product_series', 'like', '%' . $value . '%')
                                    ->orWhere('apem_part_num', 'like', '%' . $value . '%')
                                    ->orWhere('brief_description', 'like', '%' . $value . '%')
                                    ->orWhere('extended_description', 'like', '%' . $value . '%')
                                    ->orWhere('current_supplier', 'like', '%' . $value . '%')
                                    ->orWhere('competitors', 'like', '%' . $value . '%')
                                    ->orWhere('year1_sales_vol', 'like', '%' . $value . '%')
                                    ->orWhere('year2_sales_vol', 'like', '%' . $value . '%')
                                    ->orWhere('year3_sales_vol', 'like', '%' . $value . '%')
                                    ->orWhere('currency', 'like', '%' . $value . '%')
                                    ->orWhere('target_sales_price', 'like', '%' . $value . '%')
                                    ->orWhere('potential_annual_rev', 'like', '%' . $value . '%')
                                    ->orWhere('probability_of_win', 'like', '%' . $value . '%')
                                    ->orWhere('expected_value', 'like', '%' . $value . '%')
                                    ->orWhere('quote_date', 'like', '%' . $value . '%')
                                    ->orWhere('sample_date', 'like', '%' . $value . '%')
                                    ->orWhere('approval_date', 'like', '%' . $value . '%')
                                    ->orWhere('date_rcvd_prod_order', 'like', '%' . $value . '%')
                                    ->orWhere('prod_sales_order_num', 'like', '%' . $value . '%')
                                    ->orWhere('reason_for_win', 'like', '%' . $value . '%')
                                    ->orWhere('date_lost', 'like', '%' . $value . '%')
                                    ->orWhere('lost_to_whom', 'like', '%' . $value . '%')
                                    ->orWhere('reason_for_loss', 'like', '%' . $value . '%')
                                    ->orWhere('comment_field', 'like', '%' . $value . '%')
                                    ->orWhere('user_id', 'like', '%' . $value . '%');
                            }
                        );
                        break;
                    case 'searchedState':
                        $query    = $query->where('state', '=', strtolower($value));
                        $queryRev = $queryRev->where('state', '=', strtolower($value));
                        break;
                    case 'searchedStatus':
                        $query    = $query->where('status', '=', strtolower($value));
                        $queryRev = $queryRev->where('status', '=', strtolower($value));
                        break;
                    default:
                        $dataPoint = str_replace('-', '_', $key);
                        $query     = $query->where($dataPoint, 'like', '%' . $value . '%');
                        $queryRev  = $queryRev->where($dataPoint, 'like', '%' . $value . '%');
                }
            }
        }

        $totalRevenue = $queryRev->get();

        if(Count($totalRevenue) == 0) {
            $totalRevenue = null;
        } else {
            $totalRevenue = $totalRevenue->toArray()[0]['total_revenue'];
        }

        if(!is_null($limit) && !is_null($offset)) {
            if(is_null($orderBy) || is_null($orderDir) || $orderBy == '' || $orderDir == '') {
                $results      = $query
                    ->orderBy('id', 'asc')
                    ->paginate($limit);
            } else {
                $results      = $query
                    ->orderBy($orderBy, $orderDir)
                    ->paginate($limit);
            }
            $collection = $this->getCollection($results->toArray()['data']);
            return $this->addMetaInfo($limit, $offset, $results->total(), $collection, $totalRevenue);
        } elseif(is_null($limit) && is_null($offset)) {
            if(is_null($orderBy) || is_null($orderDir) || $orderBy == '' || $orderDir == '') {
                $results      = $query
                    ->orderBy('id', 'asc')
                    ->get();
            } else {
                $results      = $query
                    ->orderBy($orderBy, $orderDir)
                    ->get();
            }
            $collection = $this->getCollection($results->toArray());
            return $this->addMetaInfo(null, null, null, $collection, $totalRevenue);
        }
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
        if (Auth::user()->type != 'Admin') {
            $result     = $this->getQueryModel()
                ->where('user_id', '=', Auth::user()->id)
                ->orderBy('id', 'asc')
                ->paginate($limit);
            $collection = $this->getCollection($result->toArray()['data']);

            $queryRev     = $this->getQueryModel()
                ->select(
                    DB::raw('sum(potential_annual_rev) as total_revenue')
                )->where('user_id', '=', Auth::user()->id);
            $totalRevenue = $queryRev->get();

            return $this->addMetaInfo($limit, $page, $result->total(), $collection, $totalRevenue->toArray()[0]['total_revenue']);
        }

        $result     = $this->getQueryModel()
            ->where('draft', '=', 0)
            ->orWhere('draft', '=', '1')
            ->where('user_id', '=', Auth::user()->id)
            ->orderBy('id', 'asc')
            ->paginate($limit);
        $collection = $this->getCollection($result->toArray()['data']);

        $queryRev     = $this->getQueryModel()
            ->select(
                DB::raw('sum(potential_annual_rev) as total_revenue')
            )->where('draft', '=', 0)
            ->orWhere('draft', '=', '1')
            ->where('user_id', '=', Auth::user()->id);
        $totalRevenue = $queryRev->get();

        return $this->addMetaInfo($limit, $page, $result->total(), $collection, $totalRevenue->toArray()[0]['total_revenue']);
    }

    /**
     * @return OpportunityCollection
     */
    public function findAll()
    {
        $query = $this->getQueryModel();
        $queryRev = $this->getQueryModel();

        if (Auth::user()->type != 'Admin') {
            $query    = $query
                ->where('user_id', '=', Auth::user()->id);
            $queryRev = $queryRev
                ->select(
                    DB::raw('sum(potential_annual_rev) as total_revenue')
                )->where('user_id', '=', Auth::user()->id);
        } else {
            $query    = $query->where(
                function ($query) {
                    $query->where('draft', '=', 0)
                        ->orWhere('draft', '=', '1')
                        ->where('user_id', '=', Auth::user()->id);
                }
            );
            $queryRev = $queryRev
                ->select(
                    DB::raw('sum(potential_annual_rev) as total_revenue')
                )->where(function ($queryRev) {
                    $queryRev->where('draft', '=', 0)
                        ->orWhere('draft', '=', '1')
                        ->where('user_id', '=', Auth::user()->id);
                }
                );
        }

        $results = $query->get();
        $totalRevenue = $queryRev->get();

        if(Count($totalRevenue) == 0) {
            $totalRevenue = null;
        } else {
            $totalRevenue = $totalRevenue->toArray()[0]['total_revenue'];
        }

        $collection = $this->getCollection($results->toArray());

        return $this->addMetaInfo(null, null, null, $collection, $totalRevenue);
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
dd($newOpportunity);
            // Fix the dates from date pickers
            $newOpportunity->date_lost = DateTime::createFromFormat('m-d-Y', $newOpportunity->date_lost)->format('Y-m-d');
            $newOpportunity->estimated_prod_date = DateTime::createFromFormat('m-d-Y', $newOpportunity->estimated_prod_date)->format('Y-m-d');

            // Fix the dates from date pickers
            try {
                $model->date_lost = DateTime::createFromFormat('m/d/Y', $model->date_lost)->format('Y-m-d');
            } catch(\Exception $e) {
                $model->date_lost = DateTime::createFromFormat('m-d-Y', $model->date_lost)->format('Y-m-d');
            }
            try {
                $model->estimated_prod_date = DateTime::createFromFormat('m/d/Y', $model->estimated_prod_date)->format('Y-m-d');
            } catch(\Exception $e) {
                $model->estimated_prod_date = DateTime::createFromFormat('m-d-Y', $model->estimated_prod_date)->format('Y-m-d');
            }

            // Manually update calculated fields.
            if($newOpportunity->year2_sales_vol != null
                && $newOpportunity->year2_sales_vol != ""
                && $newOpportunity->target_sales_price != null
                && $newOpportunity->target_sales_price != ""
            ) {
                $newOpportunity->expected_value = floatval(preg_replace('/[\$,]/', '', $newOpportunity->year2_sales_vol)) * floatval(preg_replace('/[\$,]/', '', $newOpportunity->target_sales_price));
            }
            switch($newOpportunity->probability_of_win) {
                case '0%':
                    $newOpportunity->potential_annual_rev = 0;
                    break;
                case '25%':
                    $newOpportunity->potential_annual_rev = $newOpportunity->expected_value * .25;
                    break;
                case '50%':
                    $newOpportunity->potential_annual_rev = $newOpportunity->expected_value * .50;
                    break;
                case '75%':
                    $newOpportunity->potential_annual_rev = $newOpportunity->expected_value * .75;
                    break;
                case '100%':
                    $newOpportunity->potential_annual_rev = $newOpportunity->expected_value * 1;
                    break;
                default:
                    $newOpportunity->potential_annual_rev = 0;
                    break;
            }

            $newOpportunity->save();

            $event                 = new Event();
            $event->type           = "create";
            $event->date           = date('Y-m-d');
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
        $currStage  = $model->stage;
        $currStatus = $model->status;

        if ($model === null) {
            throw new ObjectNotFoundException($this->targetClass(), $object->getId());
        }

        // If the new status is "Won", check to make sure required params exist
        if($object->getStatus() == "Won") {
            if(is_null($object->getProdSalesOrderNum()) || is_null($object->getCompany()) || $object->getCompany() == "" || $object->getProdSalesOrderNum() == "") {
                throw new InvalidRequestException("Company and Sales Order Number is Required before this can be switched to a 'Won' status.");
            }
        }

        $model = $this->doStoreMapping($model, $object, true);

        // Manually update calculated fields.
        if($model->year2_sales_vol != null
            && $model->year2_sales_vol != ""
            && $model->target_sales_price != null
            && $model->target_sales_price != ""
        ) {
            $model->expected_value = floatval(preg_replace('/[\$,]/', '', $model->year2_sales_vol)) * floatval(preg_replace('/[\$,]/', '', $model->target_sales_price));
        }
        switch($model->probability_of_win) {
            case '0%':
                $model->potential_annual_rev = 0;
                break;
            case '25%':
                $model->potential_annual_rev = $model->expected_value * .25;
                break;
            case '50%':
                $model->potential_annual_rev = $model->expected_value * .50;
                break;
            case '75%':
                $model->potential_annual_rev = $model->expected_value * .75;
                break;
            case '100%':
                $model->potential_annual_rev = $model->expected_value * 1;
                break;
            default:
                $model->potential_annual_rev = 0;
                break;
        }

        // Fix the dates from date pickers
        $dateLost = DateTime::createFromFormat('m/d/Y', $model->date_lost);
        if($dateLost == false) {
            if($model->date_lost == '') {
                $model->date_lost = null;
            } else {
                $model->date_lost = DateTime::createFromFormat('m-d-Y', $model->date_lost)->format('Y-m-d');
            }
        } else {
            $model->date_lost = $dateLost->format('Y-m-d');
        }

        $estimatedProdDate = DateTime::createFromFormat('m/d/Y', $model->estimated_prod_date);
        if($estimatedProdDate == false) {
            if($model->estimated_prod_date == '') {
                $model->estimated_prod_date = null;
            } else {
                $model->estimated_prod_date = DateTime::createFromFormat('m-d-Y', $model->estimated_prod_date)->format('Y-m-d');
            }
        } else {
            $model->estimated_prod_date = $estimatedProdDate->format('Y-m-d');
        }

        $model->save();

        // Generate update event
        $event                 = new Event();
        $event->type           = "update";
        $event->date           = date('Y-m-d');
        $event->opportunity_id = $model->id;
        $event->save();

        // Check if we need to generate a stage / status event
        if ($currStage !== $model->stage) {
            $event                 = new Event();
            $event->type           = $currStage;
            $event->date           = date('Y-m-d');
            $event->opportunity_id = $model->id;
            $event->save();
        }

        if ($currStatus !== $model->status) {
            $event                 = new Event();
            $event->type           = $model->status;
            $event->date           = date('Y-m-d');
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
