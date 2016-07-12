<?php namespace App\Core\User\Repository;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:35 PM
 */

use App\Core\Shared\CrudInterface;

/**
 * Interface UserInterface
 * @package App\Core\User\Repository
 */
interface UserInterface extends CrudInterface
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
