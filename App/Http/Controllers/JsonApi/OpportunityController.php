<?php namespace App\Http\Controllers\JsonApi;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:19 PM
 */

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ListRequest;
use App\Http\Requests\Api\PaginatedListRequest;
use App\Http\Requests\Api\Opportunity\CreateOpportunityRequest;
use App\Http\Requests\Api\Opportunity\UpdateOpportunityRequest;
use App\Services\Api\Json\V1\OpportunityService;

/**
 * Class OpportunityController
 * @package App\Http\Controllers\JsonApi
 */
class OpportunityController extends Controller
{

    private $opportunityService;

    /**
     * UserController constructor.
     *
     * @param OpportunityService $opportunityService
     */
    public function __construct(OpportunityService $opportunityService)
    {
        $this->opportunityService = $opportunityService;
    }

    /**
     * Display a listing of the resource.
     *
     * @param PaginatedListRequest $request
     *
     * @return Response
     */
    public function index(PaginatedListRequest $request)
    {
        $name = null;

        if ($request->get('name') !== null && $request->get('name') !== '') {
            $name = $request->get('name');
        }

        if (is_null($name)) {
            $response = $this->opportunityService->fetchPage(
                $request->get('per_page'),
                $request->get('page')
            );
        } elseif (!is_null($name)) {
            $response = $this->opportunityService->fetchPageByName(
                $request->get('per_page'),
                $request->get('page'),
                $name
            );
        }

        return response()->jsonAPIResponse($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $dbId
     *
     * @return Response
     */
    public function show($dbId)
    {
        $response = $this->opportunityService->find($dbId);

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
        $input = $request->input();
        $data  = $input['data'];
        $array = $data['attributes'];
        $array['user-id'] = $data['relationships']['user']['data']['id'];

        $response = $this->opportunityService->create($array);

        return response()->jsonAPIResponse($response);

        $response = $this->opportunityService->create($array);

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
        $array       = $data['attributes'];
        $array['id'] = $data['id'];
        $array['user-id'] = $data['relationships']['user']['data']['id'];

        $response = $this->opportunityService->update($array);

        return response()->jsonAPIResponse($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $dbId
     *
     * @return Response
     */
    public function destroy($dbId)
    {
        $this->opportunityService->delete($dbId);

        return response()->deletedJson();
    }
}
