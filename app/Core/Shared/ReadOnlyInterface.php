<?php namespace app\Core\Shared;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:18 PM
 */

interface ReadOnlyInterface
{

    public function findAll();

    /**
     * @param $limit
     * @param $page
     *
     * @return mixed
     */
    public function findAllPaginated($limit, $page);

    /**
     * @param $dbId
     *
     * @return mixed
     */
    public function find($dbId);
}
