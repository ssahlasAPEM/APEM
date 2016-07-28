<?php namespace App\Infrastructure\Repo\User;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\User\Model\User;
use App\Core\User\Repository\UserInterface;
use App\Exceptions\ForbiddenException;
use App\Exceptions\InvalidRequestException;
use App\Infrastructure\AbstractEloquentMapper;

/**
 * Class EloquentUserMapper
 * @package App\Infrastructure\Repo\User
 */
class EloquentUserMapper extends AbstractEloquentMapper implements UserInterface
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
    public function searchByNamePaginated($limit, $offset, $name)
    {
        $escapedName = str_replace(['%', '_'], ['\%', '\_'], strtolower($name));
        $result      = $this->getQueryModel()
            ->whereRaw('LOWER(username) LIKE ?', ['%' . $escapedName . '%'])
            ->orderBy('id', 'asc')
            ->paginate($limit);
        $collection  = $this->getCollection($result->toArray()['data']);

        return $this->addMetaInfo($limit, $offset, $result->total(), $collection, ['name' => $name]);
    }

    /**
     * @param $user
     *
     * @return mixed
     * @throws ForbiddenException
     * @throws InvalidRequestException
     */
    public function create($user)
    {
        try {
            $newUser = $this->getQueryModel();
            $newUser = $this->doStoreMapping($newUser, $user, false);
            $newUser->save();
        } catch (\PDOException $exception) {
            if ($exception->getCode() === 23505) {
                throw new InvalidRequestException('A user with that email already exists');
            }

            throw $exception;
        }

        $obj = $this->createObject($newUser->toArray());

        return $obj;
    }

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return User::class;
    }
}
