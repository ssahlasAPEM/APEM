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
use App\Http\Requests\Api\User\CreateUserRequest;
use App\Http\Requests\Api\User\UpdateUserRequest;
use App\Services\Api\Json\V1\UserService;

/**
 * Class UserController
 * @package App\Http\Controllers\JsonApi
 */
class UserController extends Controller
{

    private $userService;

    /**
     * UserController constructor.
     *
     * @param UserService $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
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
            $response = $this->userService->fetchPage(
                $request->get('per_page'),
                $request->get('page')
            );
        } elseif (!is_null($name)) {
            $response = $this->userService->fetchPageByName(
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
        $response = $this->userService->find($dbId);

        return response()->jsonAPIResponse($response);
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

        $response = $this->userService->create($array);

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

        $response = $this->userService->update($array);

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
        $this->userService->delete($dbId);

        return response()->deletedJson();
    }
}
