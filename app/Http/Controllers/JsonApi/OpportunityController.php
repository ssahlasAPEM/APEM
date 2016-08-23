<?php namespace app\Http\Controllers\JsonApi;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:19 PM
 */

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

        if ($request->get('filter') !== null && $request->get('filter') !== '') {
            $filter = $request->get('filter');
        }

        if (is_null($filter)) {
            $response = $this->service->fetchPage(
                $request->get('per_page'),
                $request->get('page')
            );
        } elseif (!is_null($filter)) {
            if (!is_null($request->get('per_page')) && !is_null($request->get('page'))) {
                $response = $this->service->fetchPageFiltered(
                    $request->get('per_page'),
                    $request->get('page'),
                    $filter
                );

                if($raw === true) {
                    return $response;
                }

                return response()->jsonAPIResponse($response);
            }
            return response()->jsonAPIResponse(
                new ErrorResponse(
                    "Invalid request",
                    "Pagination parameters 'per_page' and 'page' required.",
                    400
                )
            );
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

        Excel::create(Auth::user()->id . '_nao_opportunities', function($excel) use (&$results) {
            $excel->sheet('NAO Opportunities', function($sheet) use (&$results) {
                $data = json_encode($results);
                $data = json_decode($data, true);
                $sheet->fromArray($data);
            });
        })->store('xls', storage_path('../public/downloads'));

        return response()->namedJsonRoot('csv-download', URL::to('/') . '/downloads/' . Auth::user()->id . '_nao_opportunities.xls');
    }
}
