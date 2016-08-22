<?php namespace app\Http\Controllers\JsonApi;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/15/16
 * Time: 3:19 PM
 */

use app\Http\Requests\Api\Event\CreateEventRequest;
use app\Http\Requests\Api\Event\UpdateEventRequest;
use app\Services\Api\Json\V1\EventService;

/**
 * Class EventController
 * @package app\Http\Controllers\JsonApi
 */
class EventController extends AbstractApiController
{

    /**
     * EventController constructor.
     *
     * @param EventService $service
     */
    public function __construct(EventService $service)
    {
        $this->service = $service;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateEventRequest $request
     *
     * @return Response
     */
    public function store(CreateEventRequest $request)
    {
        $input = $request->input();
        $data  = $input['data'];
        $array = $data['attributes'];
        $array['opportunity-id'] = $data['relationships']['opportunity']['data']['id'];

        $response = $this->service->create($array);

        return response()->jsonAPIResponse($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateEventRequest $request
     *
     * @return Response
     */
    public function update(UpdateEventRequest $request)
    {
        $input = $request->input();
        $data  = $input['data'];

        // Put the response into a flat array
        $array       = $data['attributes'];
        $array['id'] = $data['id'];
        $array['opportunity-id'] = $data['relationships']['opportunity']['data']['id'];

        $response = $this->service->update($array);

        return response()->jsonAPIResponse($response);
    }
}
