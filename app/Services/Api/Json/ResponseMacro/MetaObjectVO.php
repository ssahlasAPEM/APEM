<?php namespace app\Services\Api\Json\ResponseMacro;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:20 PM
 */

class MetaObjectVO
{

    /**
     * @param null $totalPages
     * @param null $totalRecords
     * @param null $totalRevenue
     */
    public function __construct($totalPages = null, $totalRecords = null, $totalRevenue = null)
    {
        $this->{'total-pages'} = $totalPages;
        $this->{'total-records'} = $totalRecords;
        $this->{'total-revenue'} = $totalRevenue;
    }
}
