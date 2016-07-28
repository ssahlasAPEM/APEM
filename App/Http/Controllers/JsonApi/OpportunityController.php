<?php namespace App\Http\Controllers\JsonApi;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:19 PM
 */

use App\Http\Requests\Api\ListRequest;
use App\Http\Requests\Api\Opportunity\CreateOpportunityRequest;
use App\Http\Requests\Api\Opportunity\UpdateOpportunityRequest;
use App\Services\Api\Json\V1\OpportunityService;

/**
 * Class OpportunityController
 * @package App\Http\Controllers\JsonApi
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
