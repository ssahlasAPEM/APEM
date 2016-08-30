<?php namespace app\Services\Api\Json\ResponseMacro;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:29 PM
 */

use app\Core\Opportunity\Model\Opportunity;
use Illuminate\Support\Facades\URL;

/**
 * Class OpportunityResponseMacro
 * @package app\Services\Api\Json\ResponseMacro
 */
class OpportunityResponseMacro extends AbstractResponseMacro
{

    /**
     * @return string
     */
    public function responseType()
    {
        return 'opportunity';
    }

    public function targetClass()
    {
        return Opportunity::class;
    }

    /**
     * @param $serviceResponse
     *
     * @return \stdClass
     */
    protected function relationships($serviceResponse)
    {
        $relationships = new \stdClass();

        $relationships->user                 = new \stdClass();
        $relationships->user->links          = new \stdClass();
        $relationships->user->links->related = URL::to('/') . "/api/v1/users/" . $serviceResponse->getUserId();

        $relationships->events                 = new \stdClass();
        $relationships->events->links          = new \stdClass();
        $relationships->events->links->related = URL::to('/') . "/api/v1/opportunities/" . $serviceResponse->getUserId() . "/events";

        return $relationships;
    }
}
