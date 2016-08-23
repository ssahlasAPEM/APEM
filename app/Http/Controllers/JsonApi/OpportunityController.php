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
     * @return Response
     */
    public function index(ListRequest $request)
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
}
