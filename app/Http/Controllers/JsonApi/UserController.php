<?php namespace app\Http\Controllers\JsonApi;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:19 PM
 */

use app\Http\Requests\Api\User\CreateUserRequest;
use app\Http\Requests\Api\User\UpdateUserRequest;
use app\Services\Api\Json\V1\UserService;
use Illuminate\Support\Facades\Auth;

/**
 * Class UserController
 * @package app\Http\Controllers\JsonApi
 */
class UserController extends AbstractApiController
{

    /**
     * UserController constructor.
     *
     * @param UserService $service
     */
    public function __construct(UserService $service)
    {
        $this->service = $service;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateUserRequest $request
     *
     * @return Response
     */
    public function store(CreateUserRequest $request)
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
     * @param UpdateUserRequest $request
     *
     * @return Response
     */
    public function update(UpdateUserRequest $request)
    {
        $input = $request->input();
        $data  = $input['data'];

        // Put the response into a flat array
        $array       = $data['attributes'];
        $array['id'] = $data['id'];

        $response = $this->service->update($array);

        return response()->jsonAPIResponse($response);
    }

    /**
     * Gets the current logged in user's information
     * @return Response
     * @internal param int $dbId
     *
     */
    public function getLoggedInUser()
    {
        $response = $this->service->find(Auth::user()->id);

        return response()->jsonAPIResponse($response);
    }
}
