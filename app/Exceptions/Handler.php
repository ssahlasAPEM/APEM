<?php namespace app\Exceptions;

use app\Http\ErrorResponseFactory;
use Bugsnag\BugsnagLaravel\Facades\Bugsnag;
use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

/**
 * Class Handler
 * @package app\Exceptions
 */
class Handler extends ExceptionHandler
{

    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        'Symfony\Component\HttpKernel\Exception\HttpException'
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception $error
     *
     * @return void
     */
    public function report(Exception $error)
    {
        Bugsnag::notifyException($error);
        //return parent::report($error);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Exception               $error
     *
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $error)
    {
        // To debug the backend, uncomment this line to get a full stack trace
        if (ErrorResponseFactory::isAppError($error)) {
            return response()->jsonAPIResponse(ErrorResponseFactory::makeErrorResponse($error));
        }

        return parent::render($request, $error);
    }
}
