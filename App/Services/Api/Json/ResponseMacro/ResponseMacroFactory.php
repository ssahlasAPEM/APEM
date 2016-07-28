<?php namespace App\Services\Api\Json\ResponseMacro;

/**
 * Created by Curious Minds Media, Inc.
 * User: eric
 * Date: 10/21/15
 * Time: 10:42 AM
 */

use App\Core\Field\Model\Field;
use App\Core\Opportunity\Model\Opportunity;
use App\Core\Shared\ComplexCollection;
use App\Core\Shared\TypedCollection;
use App\Core\User\Model\User;
use App\Http\ErrorResponse;
use Exception;
use Illuminate\Support\Collection;

/**
 * Class ResponseMacroFactory
 * @package App\Services\Api\Json\ResponseMacro
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
            ErrorResponse::class => 'App\Services\Api\Json\ResponseMacro\ErrorResponseMacro',
            Field::class         => 'App\Services\Api\Json\ResponseMacro\FieldResponseMacro',
            Opportunity::class   => 'App\Services\Api\Json\ResponseMacro\OpportunityResponseMacro',
            User::class          => 'App\Services\Api\Json\ResponseMacro\UserResponseMacro',
        ];

        if (array_key_exists($targetClass, $macroMap)) {
            return new $macroMap[ $targetClass ]();
        }

        throw new Exception("No JsonApi Response Macro Exists for this response type: $targetClass");
    }
}
