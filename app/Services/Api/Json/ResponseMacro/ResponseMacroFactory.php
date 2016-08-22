<?php namespace app\Services\Api\Json\ResponseMacro;

/**
 * Created by Curious Minds Media, Inc.
 * User: eric
 * Date: 10/21/15
 * Time: 10:42 AM
 */

use app\Core\Event\Model\Event;
use app\Core\Field\Model\Field;
use app\Core\Opportunity\Model\Opportunity;
use app\Core\Shared\ComplexCollection;
use app\Core\Shared\TypedCollection;
use app\Core\User\Model\User;
use app\Http\ErrorResponse;
use Exception;
use Illuminate\Support\Collection;

/**
 * Class ResponseMacroFactory
 * @package app\Services\Api\Json\ResponseMacro
 */
class ResponseMacroFactory
{

    /**
     * Gets the ResponseMacro based on the Collection Class
     *
     * @param $serviceResponse
     *
     * @return AccountResponseMacro|ContactResponseMacro|MapResponseMacro
     * @throws Exception
     */
    public static function getResponseMacro($serviceResponse)
    {

        switch (true) {
            case is_subclass_of($serviceResponse, TypedCollection::class):
                $targetClass = $serviceResponse->targetClass();
                break;
            case $serviceResponse instanceof ComplexCollection:
                $targetClass = get_class($serviceResponse->getPrimary());
                break;
            case is_subclass_of($serviceResponse, Collection::class):
                $targetClass = $serviceResponse->targetClass();
                break;
            default:
                $targetClass = get_class($serviceResponse);
        }

        $macroMap = [
            ErrorResponse::class => 'app\Services\Api\Json\ResponseMacro\ErrorResponseMacro',
            Field::class         => 'app\Services\Api\Json\ResponseMacro\FieldResponseMacro',
            Opportunity::class   => 'app\Services\Api\Json\ResponseMacro\OpportunityResponseMacro',
            User::class          => 'app\Services\Api\Json\ResponseMacro\UserResponseMacro',
            Event::class         => 'app\Services\Api\Json\ResponseMacro\EventResponseMacro'
        ];

        if (array_key_exists($targetClass, $macroMap)) {
            return new $macroMap[ $targetClass ]();
        }

        throw new Exception("No JsonApi Response Macro Exists for this response type: $targetClass");
    }
}
