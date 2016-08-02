<?php namespace app\Http;

/**
 * Created by Curious Minds Media.
 * User: Zachary Hamm (hamm.zachary@gmail.com)
 * Date: 12/11/15
 * Time: 12:06 PM
 */

use app\Exceptions\ForbiddenException;
use app\Exceptions\InvalidRequestException;
use app\Exceptions\InvalidStreamException;
use app\Exceptions\ObjectNotFoundException;
use app\Exceptions\VersionMismatchException;
use Exception;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;

/**
 * Class ErrorResponseFactory
 * @package app\Http
 */
class ErrorResponseFactory
{

    /**
     * @param Exception $exception
     *
     * @return bool
     */
    public static function isAppError(Exception $exception)
    {
        $exceptionClass = get_class($exception);

        $classes = [
            ObjectNotFoundException::class,
            InvalidRequestException::class,
            MethodNotAllowedHttpException::class,
            ForbiddenException::class,
            VersionMismatchException::class,
        ];

        return in_array($exceptionClass, $classes);
    }

    /**
     * @param Exception $exception
     *
     * @return ErrorResponse
     */
    public static function makeErrorResponse(Exception $exception)
    {
        $exceptionClass = get_class($exception);

        switch (true) {
            case $exceptionClass === ObjectNotFoundException::class:
                return new ErrorResponse("Object not found", $exception->getMessage(), 404);

            case $exceptionClass === InvalidRequestException::class:
                return new ErrorResponse("Invalid request", $exception->getMessage(), 400);

            case $exceptionClass === MethodNotAllowedHttpException::class:
                return new ErrorResponse("Invalid request", "Method not allowed", 405);

            case $exceptionClass === ForbiddenException::class:
                return new ErrorResponse("Forbidden", $exception->getMessage(), 403);

            case $exceptionClass === InvalidStreamException::class:
                $meta = [
                    'stream-type' => $exception->streamType,
                    'stream-id'   => $exception->streamId
                ];

                if ($exception->node) {
                    $meta['node-id'] = $exception->node->getId();
                }

                return new ErrorResponse("Invalid Stream", $exception->getMessage(), 500, $exception->errorCode, $meta);

            case $exceptionClass === VersionMismatchException::class:
                return new ErrorResponse("Version Mismatch", $exception->getMessage(), 400);

            default:
                // Handle database duplication errors that are uncaught throughout the application.
                if ($exception->getCode() == '23505') {
                    return new ErrorResponse("Duplicate record found, cannot create data", 'This data already exists and is strictly unique. Check your request.', 400);
                }

                return new ErrorResponse("Internal server error", $exception->getMessage(), 500);
        }
    }
}
