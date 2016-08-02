<?php namespace App\Http\Controllers\JsonApi;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:19 PM
 */

use App\Http\Requests\Api\Field\CreateFieldRequest;
use App\Http\Requests\Api\Field\UpdateFieldRequest;
use App\Services\Api\Json\V1\FieldService;

/**
 * Class FieldController
 * @package App\Http\Controllers\JsonApi
 */
class FieldController extends AbstractApiController
{

    /**
     * FieldController constructor.
     *
     * @param FieldService $service
     */
    public function __construct(FieldService $service)
    {
        $this->service = $service;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateFieldRequest $request
     *
     * @return Response
     */
    public function store(CreateFieldRequest $request)
    {
        $input = $request->input();
        $data  = $input['data'];
        $array = $data['attributes'];

        $response = $this->service->create($array);

        return response()->jsonAPIResponse($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateFieldRequest $request
     *
     * @return Response
     */
    public function update(UpdateFieldRequest $request)
    {
        $input = $request->input();
        $data  = $input['data'];

        // Put the response into a flat array
        $array       = $data['attributes'];
        $array['id'] = $data['id'];

        $response = $this->service->update($array);

        return response()->jsonAPIResponse($response);
    }
}
