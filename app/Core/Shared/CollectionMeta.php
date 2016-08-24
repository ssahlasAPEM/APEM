<?php namespace app\Core\Shared;

/**
 * Created by Curious Minds Media, Inc.
 * User: eric
 * Date: 10/21/15
 * Time: 8:18 AM
 */

class CollectionMeta
{

    private $limit;
    private $page;
    private $totalRecords;
    private $totalPages;
    private $totalRevenue;

    /**
     * @param      $limit
     * @param      $page
     */
    public function __construct($limit, $page)
    {

        $this->limit = $limit;
        $this->page  = $page;
    }

    /**
     * @return mixed
     */
    public function getTotalRecords()
    {
        return $this->totalRecords;
    }

    /**
     * @param mixed $totalRecords
     */
    public function setTotalRecords($totalRecords)
    {
        $this->totalRecords = $totalRecords;
    }

    /**
     * @return mixed
     */
    public function getTotalPages()
    {
        if (isset($this->limit) && isset($this->totalRecords)) {
            return $this->totalPages = ceil($this->totalRecords / $this->limit);
        } else {
            return null;
        }
    }

    /**
     * @param mixed $totalPages
     */
    public function setTotalPages($totalPages)
    {
        $this->totalPages = $totalPages;
    }

    /**
     * @return mixed
     */
    public function getLimit()
    {
        return $this->limit;
    }

    /**
     * @param mixed $limit
     */
    public function setLimit($limit)
    {
        $this->limit = $limit;
    }

    /**
     * @return mixed
     */
    public function getPage()
    {
        return $this->page;
    }

    /**
     * @param mixed $page
     */
    public function setPage($page)
    {
        $this->page = $page;
    }

    /**
     * @return mixed
     */
    public function getTotalRevenue()
    {
        return $this->totalRevenue;
    }

    /**
     * @param mixed $totalRevenue
     */
    public function setTotalRevenue($totalRevenue)
    {
        setlocale(LC_MONETARY, 'en_US');
        $this->totalRevenue = money_format('$%!n', $totalRevenue);
    }
}
