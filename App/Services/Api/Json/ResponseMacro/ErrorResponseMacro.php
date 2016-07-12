<?php namespace App\Services\Api\Json\ResponseMacro;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:20 PM
 */

use App\Http\ErrorResponse;

/**
 * Class ErrorResponseMacro
 * @package App\Services\Api\Json\ResponseMacro
 */
class ErrorResponseMacro
{

    /**
     * @param $serviceResponse
     *
     * @return array|\Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function map($serviceResponse)
    {
        if (!($serviceResponse instanceof ErrorResponse)) {
            throw new \Exception('An unknown error occured!');
        }

        // If this particular error is an invalid session from salesforce,
        // let's redirect that user
        if ($serviceResponse->getDetails() == "INVALID_SESSION") {
            return redirect()->route('logout');
        }

        $errorObj = [
            'title'  => $serviceResponse->getTitle(),
            'detail' => $serviceResponse->getDetails(),
            'status' => $serviceResponse->getStatusCode()
        ];

        if ($serviceResponse->getErrorCode() !== null) {
            $errorObj['code'] = $serviceResponse->getErrorCode();
        }

        if ($serviceResponse->getMeta() !== null) {
            $errorObj['meta'] = $serviceResponse->getMeta();
        }

        $jsonResponse = [
            'errors' => [$errorObj]
        ];

        return [$jsonResponse, $serviceResponse->getStatusCode()];
    }
}
