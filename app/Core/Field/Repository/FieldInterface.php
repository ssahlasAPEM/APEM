<?php namespace app\Core\Field\Repository;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:34 PM
 */

use app\Core\Shared\CrudInterface;

/**
 * Interface FieldInterface
 * @package app\Core\Field\Repository
 */
interface FieldInterface extends CrudInterface
{

    /**
     * Search by name paginated
     *
     * @param $limit
     * @param $offset
     * @param $name
     *
     * @return mixed
     * @throws \Exception
     */
    public function searchByNamePaginated($limit, $offset, $name);
}
