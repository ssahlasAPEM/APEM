<?php namespace app\Infrastructure;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use app\Core\DomainEntity;
use app\Core\Shared\TypedCollection;
use app\Exceptions\ForbiddenException;
use app\Exceptions\InvalidRequestException;
use app\Exceptions\ObjectNotFoundException;
use app\Infrastructure\Repo\Field\FieldCollection;
use app\Infrastructure\Repo\Opportunity\OpportunityCollection;
use app\Infrastructure\Repo\User\UserCollection;
use Illuminate\Database\Eloquent\Model;
use Log;

/**
 * Class AbstractEloquentMapper
 * @package app\Infrastructure
 */
abstract class AbstractEloquentMapper extends AbstractMapper
{

    /**
     * @var Model
     */
    protected $model;
    protected $totalPages;

    /**
     * Mapper constructor.
     *
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

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
        $queryModel = $this->getQueryModel();
        $response   = $queryModel->where('id', '=', $dbId)->first();

        if ($response === null) {
            throw new ObjectNotFoundException($this->targetClass(), $dbId);
        }

        $responseArray = $response->toArray();
        $object        = $this->createObject($responseArray);

        return $object;
    }

    /**
     * Create and store a DomainEntity on the Eloquent backend
     *
     * @param $object
     *
     * @return DomainEntity
     */
    public function create($object)
    {
        // Override these to their correct values
        $object->setOwnerId($this->getOwnerId());
        $object->setLastUpdatedBy(session()->get('user.externalId'));

        $model = $this->getQueryModel();
        $model = $this->doStoreMapping($model, $object, false);
        $model->save();

        $obj = $this->createObject($model->toArray());

        return $obj;
    }

    /**
     * @param $templateId
     * @param $templateMapper
     * @param $instanceEntity
     *
     * @return mixed
     * @throws InvalidRequestException
     */
    public function makeInstance($templateId, $templateMapper, $instanceEntity)
    {
        try {
            $template = $templateMapper->find($templateId);
        } catch (ObjectNotFoundException $exception) {
            throw new InvalidRequestException("No such template found");
        }

        $domEntFactory = $this->getFactory()->getDomainEntityFactory();

        return $domEntFactory->copyEntity($instanceEntity, $template);
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
        $model = $this->getQueryModel();
        $model = $model->where('id', '=', $object->getId())->first();

        if ($model === null) {
            throw new ObjectNotFoundException($this->targetClass(), $object->getId());
        }

        $model = $this->doStoreMapping($model, $object, true);
        $model->save();

        $obj = $this->createObject($model->toArray());

        return $obj;
    }

    /**
     * Returns the Persistence Factory for the DomainEntity this mapper is tied to
     *
     * @return AbstractEloquentPersistenceFactory
     */
    protected function getFactory()
    {
        return AbstractEloquentPersistenceFactory::getFactory($this->targetClass());
    }

    /**
     * Return a 'paginated' collection of DomainEntity objects
     *
     * @param      $limit Per-page limit
     * @param      $page  'Page'
     *
     * @return TypedCollection A collection of the DomainEntity objects found
     */
    public function findAllPaginated($limit, $page)
    {
        $result = $this->getQueryModel()->orderBy('id', 'asc')->paginate($limit);

        $collection = $this->getCollection($result->toArray()['data']);

        return $this->addMetaInfo($limit, $page, $result->total(), $collection);
    }

    /**
     * Deletes an object
     *
     * @param $dbId
     *
     * @return bool
     * @throws \Exception
     */
    public function delete($dbId)
    {
        if(Auth::user()->type === 'Admin') {
            $entity = $this->getQueryModel()
                ->where('id', '=', $dbId)
                ->first();

            if (is_null($entity)) {
                return false;
            }

            $entity->delete();

            return true;
        } else {
            throw new ForbiddenException("Not Authorized.");
        }
    }

    /**
     * @param null $clientId
     *
     * @return mixed
     */
    public function total($clientId = null)
    {
        if ($clientId === null) {
            return $this->getQueryModel()->count();
        }

        $result = $this->getQueryModel()->where('client_id', '=', $clientId);

        return $result->count();
    }

    /**
     * @return OpportunityCollection|UserCollection|FieldCollection
     */
    public function findAll()
    {
        $result = $this->getQueryModel()->get();

        return $this->getCollection($result->toArray());
    }

    /**
     * @return Model
     */
    public function getQueryModel()
    {
        return $this->model;
    }
}
