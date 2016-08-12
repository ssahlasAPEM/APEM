<?php namespace app\Infrastructure\Repo\User;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;
use app\Core\User\Model\User;
use app\Core\User\Repository\UserInterface;
use app\Exceptions\ForbiddenException;
use app\Exceptions\InvalidRequestException;
use app\Infrastructure\AbstractEloquentMapper;
use Illuminate\Support\Facades\Auth;

/**
 * Class EloquentUserMapper
 * @package app\Infrastructure\Repo\User
 */
class EloquentUserMapper extends AbstractEloquentMapper implements UserInterface
{

    /**
     * Finds a single DomainEntity identified by $dbId on the Eloquent backend
     *
     * Note that this currently returns an array with one element because of the
     * way that custom-field discovery is currently implemented.
     *
     * @param mixed $dbId The id of the object to find
     *
     * @return array An array containing the DomainEntity found as the first element.
     * @throws \Exception
     */
    public function find($dbId)
    {
        if(Auth::user()->type !== 'Admin' && Auth::user()->id !== $dbId) {
            throw new ForbiddenException("Not Authorized.");
        }

        return parent::find($dbId);
    }

    /**
     * Updates an existing DomainEntity object and returns it
     *
     * @param DomainEntity $object
     *
     * @return DomainEntity
     * @throws ObjectNotFoundException
     * @throws \Exception
     */
    public function update(DomainEntity $object)
    {
        if(Auth::user()->type !== 'Admin' && Auth::user()->id != $object->getId()) {
            throw new ForbiddenException("Not Authorized.");
        }

        return parent::update($object);
    }

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
        if(Auth::user()->type !== 'Admin') {
            throw new ForbiddenException("Not Authorized.");
        }

        $escapedName = str_replace(['%', '_'], ['\%', '\_'], strtolower($name));
        $result      = $this->getQueryModel()
            ->whereRaw('LOWER(username) LIKE ?', ['%' . $escapedName . '%'])
            ->orderBy('id', 'asc')
            ->paginate($limit);
        $collection  = $this->getCollection($result->toArray()['data']);

        return $this->addMetaInfo($limit, $offset, $result->total(), $collection, ['name' => $name]);
    }

    /**
     * Return a 'paginated' collection of DomainEntity objects
     *
     * @param      $limit Per-page limit
     * @param      $page  'Page'
     *
     * @return TypedCollection A collection of the DomainEntity objects found
     * @throws ForbiddenException
     */
    public function findAllPaginated($limit, $page)
    {
        if(Auth::user()->type !== 'Admin') {
            throw new ForbiddenException("Not Authorized.");
        }

        return parent::findAllPaginated($limit, $page);
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
        if(Auth::user()->type !== 'Admin') {
            throw new ForbiddenException("Not Authorized.");
        }

        try {
            $newUser = $this->getQueryModel();
            $newUser = $this->doStoreMapping($newUser, $user, false);
            $newUser->api_token = str_random(60);
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
     * @return FieldCollection|OpportunityCollection|UserCollection
     * @throws ForbiddenException
     */
    public function findAll()
    {
        if(Auth::user()->type !== 'Admin') {
            throw new ForbiddenException("Not Authorized.");
        }
        return parent::findall();
    }

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return User::class;
    }
}
