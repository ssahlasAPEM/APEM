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
use App\Http\Requests\Api\Field\CreateFieldRequest;
use App\Http\Requests\Api\Field\UpdateFieldRequest;
use App\Services\Api\Json\V1\FieldService;

/**
 * Class FieldController
 * @package App\Http\Controllers\JsonApi
 */
class FieldController extends Controller
{

    private $fieldService;

    /**
     * UserController constructor.
     *
     * @param FieldService $fieldService
     */
    public function __construct(FieldService $fieldService)
    {
        $this->fieldService = $fieldService;
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
        $name = null;

        if ($request->get('name') !== null && $request->get('name') !== '') {
            $name = $request->get('name');
        }

        if (is_null($name)) {
            $response = $this->fieldService->fetchPage(
                $request->get('per_page'),
                $request->get('page')
            );
        } elseif (!is_null($name)) {
            if (!is_null($request->get('per_page')) && !is_null($request->get('page'))) {
                $response = $this->fieldService->fetchPageByName(
                    $request->get('per_page'),
                    $request->get('page'),
                    $name
                );
            } else {
                $response = $this->fieldService->fetchPage();
            }
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
        $response = $this->fieldService->find($dbId);

        return response()->jsonAPIResponse($response);
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

        $response = $this->fieldService->create($array);

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

        $response = $this->fieldService->update($array);

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
        $this->fieldService->delete($dbId);

        return response()->deletedJson();
    }
}
