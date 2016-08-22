<?php namespace app\Services\Api\Json\ResponseMacro;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/13/16
 * Time: 3:29 PM
 */

use app\Core\Event\Model\Event;
use Illuminate\Support\Facades\URL;

/**
 * Class FieldResponseMacro
 * @package app\Services\Api\Json\ResponseMacro
 */
class EventResponseMacro extends AbstractResponseMacro
{

    /**
     * @return string
     */
    public function responseType()
    {
        return 'event';
    }

    public function targetClass()
    {
        return Event::class;
    }

    /**
     * @param $serviceResponse
     *
     * @return \stdClass
     */
    protected function relationships($serviceResponse)
    {
        $relationships = new \stdClass();

        $relationships->opportunity                 = new \stdClass();
        $relationships->opportunity->links          = new \stdClass();
        $relationships->opportunity->links->related = URL::to('/') . "/api/v1/opportunities/" . $serviceResponse->getOpportunityId();

        return $relationships;
    }
}
