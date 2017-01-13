<?php namespace app\Http\Controllers\JsonApi;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:19 PM
 */

use app\Core\Event\Model\Event;
use app\Http\Requests\Api\ListRequest;
use app\Http\Requests\Api\Opportunity\CreateOpportunityRequest;
use app\Http\Requests\Api\Opportunity\UpdateOpportunityRequest;
use app\Services\Api\Json\V1\OpportunityService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Maatwebsite\Excel\Facades\Excel;

/**
 * Class OpportunityController
 * @package app\Http\Controllers\JsonApi
 */
class OpportunityController extends AbstractApiController
{

    /**
     * OpportunityController constructor.
     *
     * @param OpportunityService $service
     */
    public function __construct(OpportunityService $service)
    {
        $this->service = $service;
    }

    /**
     * Display a listing of the resource.
     *
     * @param ListRequest $request
     *
     * @param bool        $raw
     *
     * @return Response
     */
    public function index(ListRequest $request, $raw = false)
    {
        $filter = null;
        $per_page = $request->get('per_page');
        $page = $request->get('page');

        if ($request->get('orderBy') !== null && $request->get('orderBy') !== '') {
            $filter['orderBy'] = $request->get('orderBy');
        }

        if ($request->get('orderDir') !== null && $request->get('orderDir') !== '') {
            $filter['orderDir'] = $request->get('orderDir');
        }

        if ($request->get('lastThirtyDays') !== null && $request->get('lastThirtyDays') !== '') {
            $filter['lastThirtyDays'] = $request->get('lastThirtyDays');
        }

        if ($request->get('dateEntered') !== null && $request->get('dateEntered') !== '') {
            $filter['dateEntered'] = $request->get('dateEntered');
        }

        if ($request->get('startDate') !== null && $request->get('startDate') !== '') {
            $filter['startDate'] = $request->get('startDate');
        }

        if ($request->get('endDate') !== null && $request->get('endDate') !== '') {
            $filter['endDate'] = $request->get('endDate');
        }

        if ($request->get('estimatedProdDate') !== null && $request->get('estimatedProdDate') !== '') {
            $filter['estimatedProdDate'] = $request->get('estimatedProdDate');
        }

        if ($request->get('searchString') !== null && $request->get('searchString') !== '') {
            $filter['searchString'] = $request->get('searchString');
        }

        if ($request->get('searchedState') !== null && $request->get('searchedState') !== '') {
            $filter['searchedState'] = $request->get('searchedState');
        }

        if ($request->get('searchedStatus') !== null && $request->get('searchedStatus') !== '') {
            $filter['searchedStatus'] = $request->get('searchedStatus');
        }

        if (is_null($filter)) {
            if(is_null($page) || is_null($per_page)) {
                $response = $this->service->fetchAll();
            } elseif(!is_null($page) || !is_null($per_page)) {
                $response = $this->service->fetchPage(
                    $request->get('per_page'),
                    $request->get('page')
                );
            }
        } elseif (!is_null($filter)) {
            if(is_null($page) || is_null($per_page)) {
                $response = $this->service->fetchAllFiltered(
                    $filter
                );
            } elseif(!is_null($page) || !is_null($per_page)) {
                $response = $this->service->fetchPageFiltered(
                    $request->get('per_page'),
                    $request->get('page'),
                    $filter
                );
            }
        }

        if($raw === true) {
            return $response;
        }

        return response()->jsonAPIResponse($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateOpportunityRequest $request
     *
     * @return Response
     */
    public function store(CreateOpportunityRequest $request)
    {
        $input            = $request->input();
        $data             = $input['data'];
        $array            = $data['attributes'];
        $array['user-id'] = $data['relationships']['user']['data']['id'];

        $response = $this->service->create($array);

        return response()->jsonAPIResponse($response);

        $response = $this->service->create($array);

        return response()->jsonAPIResponse($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateOpportunityRequest $request
     *
     * @return Response
     */
    public function update(UpdateOpportunityRequest $request)
    {
        $input = $request->input();
        $data  = $input['data'];

        // Put the response into a flat array
        $array            = $data['attributes'];
        $array['id']      = $data['id'];
        $array['user-id'] = $data['relationships']['user']['data']['id'];

        $response = $this->service->update($array);

        return response()->jsonAPIResponse($response);
    }

    /**
     * Download a CSV File
     * This creates a CSV file in a public directory named appropriately for the user
     * Anytime it is downloaded it will re-create the file and send it as a url back to
     * the front-end for the front-end to download.
     *
     * @param ListRequest $request
     *
     * @return Response
     */
    public function generateCSV(ListRequest $request)
    {
        $results = $this->index($request, true);
        $results = json_encode($results);
        $results = json_decode($results, true);
        $results = array_map(array($this, 'cleanValues'), $results);

        Excel::create(Auth::user()->id . '_nao_opportunities', function($excel) use (&$results) {
            $excel->sheet('NAO Opportunities', function($sheet) use (&$results) {
                $sheet->fromArray($results);
            });
        })->store('xls', storage_path('../public/downloads'));

        return response()->namedJsonRoot('csv-download', URL::to('/') . '/downloads/' . Auth::user()->id . '_nao_opportunities.xls');
    }

    // Cleans the CSV output
    public function cleanValues( $array ) {

        foreach($array AS $key => $value) {
            $value = trim(preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $value));
            $array[$key] = $value;

            switch($key) {
                case 'year1_sales_vol':
                case 'year2_sales_vol':
                case 'year3_sales_vol':
                case 'target_sales_price':
                case 'potential_annual_rev':
                case 'expected_value':
                    $array[$key] = floatval(str_replace(',', '', $value));
                    break;
                case 'quote_date':
                case 'sample_date':
                case 'approval_date':
                case 'date_rcvd_prod_order':
                case 'estimated_prod_date':
                case 'created_at':
                case 'updated_at':
                    $date = strtotime( $value );
                    $array[$key] = date( 'd-m-Y', $date );
                    break;
                case 'probability_of_win':
                    $array[$key] = intval(str_replace('%', '', $value)) / 100;
                    break;
                default:
                    break;
            }
        }

        return $array;
    }

    /**
     * Fetch Relationships for the Opportunity Object
     *
     * @param $dbId
     * @param $relationshipType
     *
     * @return
     */
    public function relationships($dbId, $relationshipType)
    {
        switch ($relationshipType) {
            case 'events':
                $relatedClass = Event::class;
                break;

            default:
                return response()->jsonAPIResponse(
                    new ErrorResponse(
                        "Invalid relationship type",
                        "$relationshipType objects are not related to opportunities",
                        400
                    )
                );
        }

        $response = $this->service->fetchRelated($relatedClass, $dbId, null, null, null);

        return response()->jsonAPIResponse($response);
    }
}
