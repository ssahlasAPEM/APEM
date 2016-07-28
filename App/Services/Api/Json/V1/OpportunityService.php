<?php namespace App\Services\Api\Json\V1;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/12/16
 * Time: 12:16 PM
 */

use App\Core\Opportunity\Repository\OpportunityInterface;

/**
 * Class OpportunityService
 * @package App\Services\Api\Json\V1
 */
class OpportunityService extends RESTFULService
{
    /**
     * @param OpportunityInterface $opportunityInterface
     */
    public function __construct(OpportunityInterface $opportunityInterface)
    {
        parent::__construct();
        $this->interface = $opportunityInterface;
    }
}
