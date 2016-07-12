<?php namespace App\Infrastructure\Repo\Field;

/**
 * Created by Curious Minds Media.
 * Field: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App\Core\DomainEntity;
use App\Core\Field\Model\Field;
use App\Core\Field\Repository\FieldInterface;
use App\Exceptions\ForbiddenException;
use App\Exceptions\InvalidRequestException;
use App\Infrastructure\AbstractEloquentMapper;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EloquentFieldMapper
 * @package App\Infrastructure\Repo\Field
 */
class EloquentFieldMapper extends AbstractEloquentMapper implements FieldInterface
{

    /**
     * @var Model
     */
    private $field;
    protected $totalPages;

    /**
     * EloquentFieldMapper constructor.
     *
     * @param Model $field
     */
    public function __construct(Model $field)
    {
        $this->field = $field;
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
        $escapedName = str_replace(['%', '_'], ['\%', '\_'], strtolower($name));
        $result      = $this->getQueryModel()
            ->whereRaw('LOWER(fieldname) LIKE ?', ['%' . $escapedName . '%'])
            ->orderBy('id', 'asc')
            ->paginate($limit);
        $collection  = $this->getCollection($result->toArray()['data']);

        return $this->addMetaInfo($limit, $offset, $result->total(), $collection, ['name' => $name]);
    }

    /**
     * @param $field
     *
     * @return mixed
     * @throws ForbiddenException
     * @throws InvalidRequestException
     */
    public function create($field)
    {
        try {
            $newField = $this->getQueryModel();
            $newField = $this->doStoreMapping($newField, $field, false);
            $newField->save();
        } catch (\PDOException $exception) {
            if ($exception->getCode() === 23505) {
                throw new InvalidRequestException('A field with that label already exists');
            }

            throw $exception;
        }

        $obj = $this->createObject($newField->toArray());

        return $obj;
    }

    /**
     * @return Model
     */
    public function getQueryModel()
    {
        return $this->field;
    }

    /**
     * @return mixed
     */
    public function targetClass()
    {
        return Field::class;
    }
}
