<?php namespace App\Providers;

/**
 * Created by Curious Minds Media, Inc.
 * User: Eric Meyer (eric@curiousm.com)
 * Date: 2/6/15
 * Time: 3:43 PM
 */

use App\Services\Api\Json\ResponseMacro\ResponseMacroFactory;
use Exception;
use Illuminate\Support\ServiceProvider;
use Response;

/**
 * Class ApiServiceProvider
 * @package App\Providers
 */
class ApiServiceProvider extends ServiceProvider
{

    public function boot()
    {

        /**
         * Provides a JSON Response in accordance with JSON API
         */
        response()->macro(
            'jsonAPIResponse',
            function ($response) {
                $contentType = 'application/vnd.api+json';

                try {
                    $responseMacro = ResponseMacroFactory::getResponseMacro($response);

                    // If this response is a redirect, process it as a redirect
                    // and redirect the user instead.
                    if (is_a($responseMacro->map($response), 'Illuminate\Http\RedirectResponse')) {
                        return $responseMacro->map($response);
                    }

                    list($json, $responseCode) = $responseMacro->map($response);

                    return response()->json($json, $responseCode)->header('Content-Type', $contentType);
                } catch (Exception $e) {

                    /* But what happens if we have an error while generating
                     * our response? This happens, that's what. */
                    $error = [
                        'errors' => [[
                            'title'  => 'Error generating JSON API response',
                            'detail' => $e->getMessage()
                        ]]
                    ];

                    return response()->json($error, 500)->header('Content-Type', $contentType);
                }
            }
        );

        /**
         * Provides the appropriate JSON response for a deleted record
         */
        response()->macro(
            'deletedJson',
            function () {
                return response()->json([], 204);
            }
        );
    }

    public function register()
    {
        // TODO: Implement register() method.
    }
}
