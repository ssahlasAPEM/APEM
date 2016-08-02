<?php namespace app\Core\Shared;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:33 PM
 */

use app\Core\DomainEntity;
use app\Infrastructure\AbstractDomainEntityFactory;
use Illuminate\Support\Collection;

/**
 * Class TypedCollection
 * @package Revegy\Core\Shared
 */
abstract class TypedCollection extends Collection
{

    protected $domEntFact;
    protected $total = 0;

    private $pointer = 0;
    private $objects = [];
    private $meta;

    /**
     * Create a new collection. Requires a raw array and an concrete implementation
     * of an AbstractDomainEntityFactory
     *
     * @param array                       $raw
     * @param AbstractDomainEntityFactory $domEntFact
     *
     * @throws \Exception
     */
    public function __construct(array $raw = null, AbstractDomainEntityFactory $domEntFact = null)
    {
        if (is_null($domEntFact)) {
            throw new \Exception("AbstractDomainEntityFactory cannot be NULL.");
        }

        parent::__construct($raw);
        $this->total = 0;
        if (!empty($raw)) {
            $this->total = $this->count();
        }

        $this->domEntFact = $domEntFact;
    }

    /**
     * Adds an item to the collection
     *
     * @param DomainEntity $object
     *
     * @throws \Exception
     */
    public function add(DomainEntity $object)
    {

        $class = $this->targetClass();
        if (!($object instanceof $class)) {
            throw new \Exception("Collection add mismatch on {$class} collection");
        }
        $this->notifyAccess();
        $this->objects[ $this->total ] = $object;
        $this->total ++;
    }

    /**
     * @return mixed
     */
    abstract public function targetClass();

    protected function notifyAccess()
    {
        //leaving it blank
    }

    /**
     * Instantiate an object instance if needed
     *
     * @param $num
     *
     * @return null
     */
    private function getRow($num)
    {
        $this->notifyAccess();

        if ($num >= $this->total || $num < 0) {
            return null;
        }
        if (isset($this->objects[ $num ])) {
            return $this->objects[ $num ];
        }
        if (isset($this->items[ $num ])) {
            $this->objects[ $num ] = $this->domEntFact->createObject($this->items[ $num ]);

            return $this->objects[ $num ];
        }
    }

    public function rewind()
    {
        $this->pointer = 0;
    }

    /**
     * @return null
     */
    public function current()
    {
        return $this->getRow($this->pointer);
    }

    /**
     * @return int
     */
    public function key()
    {
        return $this->pointer;
    }

    /**
     * @return null
     */
    public function next()
    {
        $row = $this->getRow($this->pointer);
        if ($row) {
            $this->pointer ++;
        }

        return $row;
    }

    /**
     * @return bool
     */
    public function valid()
    {
        return (!is_null($this->current()));
    }

    /**
     * @return array
     */
    public function all()
    {

        for ($this->rewind(); $this->pointer < $this->count(); $this->next()) {
            $this->getRow($this->pointer);
        }

        return $this->objects;
    }

    /**
     * @return mixed
     */
    public function getMeta()
    {
        return $this->meta;
    }

    /**
     * @param mixed $meta
     */
    public function setMeta(CollectionMeta $meta)
    {
        $this->meta = $meta;
    }

    /**
     * Merge the collection with the given items.
     *
     * @param  mixed $items
     *
     * @return static
     */
    public function merge($items)
    {
        return array_merge($this->items, $items->items);
    }

    /**
     * Run a map over each of the items.
     *
     * @param  callable $callback
     * @param           $entFactory
     *
     * @return static
     */
    public function customMap(callable $callback, $entFactory)
    {
        $keys = array_keys($this->items);

        $items = array_map($callback, $this->items, $keys);

        return new static(array_combine($keys, $items), $entFactory);
    }
}
