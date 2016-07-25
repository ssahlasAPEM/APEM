<?php namespace App\Services\Api\Json\ResponseMacro;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:20 PM
 */

use Illuminate\Support\Collection;
use App\Core\Field\Model\Field;
use App\Core\Opportunity\Model\Opportunity;
use App\Core\User\Model\User;
use App\Core\DomainEntityFieldFlags as Flags;
use App\Core\Shared\ComplexCollection;
use App\Core\Shared\TypedCollection;

/**
 * Class AbstractResponseMacro
 * @package App\Services\Api\Json\ResponseMacro
 */
abstract class AbstractResponseMacro
{

    /**
     * Checks if Response is a Collection or Single Object
     *
     * @param $serviceResponse
     *
     * @return array
     */
    public function map($serviceResponse)
    {
        switch (true) {
            // Are we dealing with a collection of objects?
            case is_subclass_of($serviceResponse, TypedCollection::class):
                $data = [];

                $responseData = $serviceResponse->all();

                foreach ($responseData as $domainEntity) {
                    array_push($data, $this->mapAttributes($domainEntity));
                }

                //sometimes collection is paginated, sometimes not so much.
                if ($serviceResponse->getMeta() !== null) {
                    $links = new LinksVO($serviceResponse->getMeta());
                    $meta  = new MetaObjectVO($serviceResponse->getMeta()->getTotalPages());
                } else {
                    $links = new LinksVO();
                    $meta  = new MetaObjectVO();
                }

                $jsonResponse = [
                    'data'  => $data,
                    'meta'  => $meta,
                    'links' => $links
                ];
                break;

            case $serviceResponse instanceof ComplexCollection:
                // Check if we have a complex response with a single primary object and a Collection of includes
                // TODO: this has been refactored a bit but it could stand to be even further refactored
                $data = $this->mapAttributes($serviceResponse->getPrimary(), $serviceResponse->getIncluded());

                // Why don't we do this *inside* the individual response macro factories?
                $included             = [];
                $responseMacroFactory = new ResponseMacroFactory();
                $includedResponse     = $serviceResponse->getIncluded()->all();

                foreach ($includedResponse as $object) {
                    $responseMacro = $responseMacroFactory->getResponseMacro($object);

                    $object = $responseMacro->mapAttributes($object);
                    array_push($included, $object);
                }

                $jsonResponse = [
                    'data'     => $data,
                    'included' => $included
                ];
                break;

            // Are we dealing with a basic collection of objects?
            case is_subclass_of($serviceResponse, Collection::class):
                $data = [];

                $responseData = $serviceResponse->all();

                foreach ($responseData as $domainEntity) {
                    array_push($data, $this->mapAttributes($domainEntity));
                }

                $jsonResponse = [
                    'data' => $data,
                ];
                break;

            // We have a domain entity
            default:
                $data         = $this->mapAttributes($serviceResponse);
                $jsonResponse = ['data' => $data];
                break;
        }

        return [$jsonResponse, 200];
    }

    /**
     * Maps Domain Entities into JsonApi Response
     *
     * @param      $serviceResponse
     *
     * @param null $includedCollection
     *
     * @return mixed
     * @throws \Exception
     */
    protected function mapAttributes($serviceResponse, $includedCollection = null)
    {
        $response       = new \stdClass();
        $response->type = $this->responseType();
        $response->id   = $serviceResponse->getId();

        $relationships = $this->relationships($serviceResponse);
        if ($relationships !== null) {
            $response->relationships = $relationships;
        }

        $response->attributes = new \stdClass();

        // Fill in the attributes object
        foreach ($this->jsonMappings() as $jsonKey => list($getterSuffix, $flags)) {
            if ($flags & Flags::WRITEONLY) {
                continue;
            }

            $getter = 'get' . $getterSuffix;

            $val = $serviceResponse->{$getter}();

            // Commented out as this is the old code that generates
            // Blobs of the journey for the old front-end.
            if ($flags & Flags::JSON) {
                $val = json_decode($val);
            }

            if (empty($val)) {
                if (is_bool($val)) {
                    $val = false;
                } elseif (is_string($val)) {
                    $val = '';
                } elseif (is_object($val) || is_array($val)) {
                    $val = null;
                }
            }

            $response->attributes->{$jsonKey} = $val;
        }

        // Construct an "included" array, if necessary
        $response = $this->buildIncludedArray($response, $includedCollection);

        return $response;
    }

    /**
     * @param $response
     * @param $includedCollection
     *
     * @return mixed
     * @throws \Exception
     */
    protected function buildIncludedArray($response, $includedCollection)
    {
        if ($includedCollection !== null) {
            // XXX: We need a class -> type mapping
            switch ($includedCollection->targetClass()) {
                case User::class:
                    $includedType = 'user';
                    break;

                default:
                    throw new \Exception("Cannot include that type as part of the included array of a JsonApi Response");
            }

            if (!property_exists($response, 'relationships') || $response->relationships == null) {
                $response->relationships = new \stdClass();
            }

            $response->relationships->$includedType       = new \stdClass();
            $response->relationships->$includedType->data = [];

            $includedObjects = $includedCollection->all();
            foreach ($includedObjects as $obj) {
                $dataNode       = new \stdClass();
                $dataNode->type = $includedType;
                $dataNode->id   = $obj->getId();

                array_push($response->relationships->$includedType->data, $dataNode);
            }
        }

        return $response;
    }

    /**
     * What type string to put in the "type" attribute of the JSON response.
     *
     * Override this class to return the right response-type string, e.g., 'contact', 'custom'
     *
     * @return string
     */
    abstract public function responseType();

    abstract public function targetClass();

    /**
     * Returns a mapping from the json object key in "attributes" to
     * the appropriate label of the object
     */
    public function labelMappings()
    {
        return config('doment_mappings')[ $this->targetClass() ]['objectDiscovery'];
    }

    public function jsonMappings()
    {
        $defaults     = config('doment_mappings')['default']['jsonToDomainEntity'];
        $jsonMappings = config('doment_mappings')[ $this->targetClass() ]['jsonToDomainEntity'];

        return array_merge($defaults, $jsonMappings);
    }

    /**
     * Returns the relationships object for this response
     *
     * Return null if there are no relationships
     *
     * Note on constructing the relationships object. If the relationship is a
     * "has many" (it references all the objects related to this one instead of
     * just one particular object, be sure to make the object name plural. If
     * it's a "belongs to", make it singular. Compare the difference between
     * the Accounts relationships and Contacts relationships to see in detail.
     *
     * @SuppressWarnings("unused")
     * @param $serviceResponse
     *
     * @return mixed
     */
    protected function relationships($serviceResponse)
    {
        return null;
    }

    /**
     * This is triggered by the ADDITIONALPARSE flag
     *
     * Return null if there are no additional parse functions set for this object
     *
     * Sometimes, we need to generate an additional response structure, whether
     * it be a modified response or a BLOB field containing data that is structured
     * for a particular piece of the app, such as Journey Builder view, etc.
     *
     * @SuppressWarnings("unused")
     * @param $val
     *
     * @return mixed
     */
    protected function parseAdditional($val)
    {
        return $val;
    }
}
