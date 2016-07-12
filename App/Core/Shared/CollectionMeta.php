<?php namespace App\Core\Shared;

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
    private $extra;

    /**
     * @param      $limit
     * @param      $page
     * @param null $extra
     */
    public function __construct($limit, $page, $extra = null)
    {

        $this->limit = $limit;
        $this->page  = $page;
        $this->extra = $extra;
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
    public function getExtra()
    {
        return $this->extra;
    }

    /**
     * "Extra" should be an array of key-value pairs representing extra query
     * paramaters necessary for constructing the links in the meta for the
     * query that generated this data. For example, if it was a search query,
     * we need to preserve the name=SEARCHKEY parameter in the page links.
     *
     * But Extra could be anything else needed to build the JSON response
     *
     * @param mixed $extra
     */
    public function setExtra($extra)
    {
        $this->extra = $extra;
    }
}
