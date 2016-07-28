<?php namespace App\Http\Controllers\JsonApi;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/28/16
 * Time: 11:00 AM
 */

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ListRequest;

class AbstractApiController extends Controller
{

    /*
     * API Service Property
     */
    protected $service;

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
            $response = $this->service->fetchPage(
                $request->get('per_page'),
                $request->get('page')
            );
        } elseif (!is_null($name)) {
            if (!is_null($request->get('per_page')) && !is_null($request->get('page'))) {
                $response = $this->service->fetchPageByName(
                    $request->get('per_page'),
                    $request->get('page'),
                    $name
                );

                return response()->jsonAPIResponse($response);
            }
            $response = $this->service->fetchPage();
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
        $response = $this->service->find($dbId);

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
        $this->service->delete($dbId);

        return response()->deletedJson();
    }

}
