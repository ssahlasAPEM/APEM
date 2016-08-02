<?php namespace App\Core\Shared;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:16 PM
 */

use App\Core\DomainEntity;

/**
 * Interface CrudInterface
 * @package App\Core\Shared
 */
interface CrudInterface extends ReadOnlyInterface
{

    /**
     * @param DomainEntity $object
     *
     * @return mixed
     */
    public function update(DomainEntity $object);

    /**
     * @param $dbId
     *
     * @return mixed
     */
    public function delete($dbId);
}
