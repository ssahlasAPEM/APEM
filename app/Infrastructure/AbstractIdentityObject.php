<?php namespace app\Infrastructure;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

abstract class AbstractIdentityObject
{

    private $legalFields = [];

    /**
     * Construct an IdentityObject with optional legalFields array
     *
     * An IdentityObject is a set of fields, comparison operators and values that,
     * taken jointly, identify a specific collection of items within a database.
     *
     * @param array $legalFields an array of the only fields that are allowed to be selected on
     */
    public function __construct(array $legalFields)
    {
        if (!empty($legalFields)) {
            $this->legalFields = $legalFields;
        }
    }

    /**
     * Return the array of fields that are legal for this IdentityObject type
     *
     * @return array
     */
    public function getLegalFields()
    {
        return $this->legalFields;
    }

    /**
     * 'Fluently' specify the field we are currently working with
     *
     * If legal fields is set, $fieldName must be one of the legal fields
     *
     * @param $fieldName
     * the field's name
     *
     * @return AbstractIdentityObject this object
     * @throws \Exception
     */
    public function field($fieldName)
    {
        if (!$this->isEmpty() && $this->currentField->isIncomplete()) {
            throw new \Exception("Current field is incomplete, cannot add new field yet.");
        }

        $this->enforceLegalFields($fieldName);
        if (isset($this->fields[ $fieldName ])) {
            $this->currentField = $this->fields[ $fieldName ];
        } elseif (!isset($this->fields[ $fieldName ])) {
            $this->currentField         = new IdentityObjectField($fieldName);
            $this->fields[ $fieldName ] = $this->currentField;
        }

        return $this;
    }

    /**
     * 'Fluently' specify the comparison operator and value for the current field
     *
     * @param $operatorSymbol the comparison operator
     * @param $value          the value to compare against
     *
     * @return AbstractIdentityObject this object
     * @throws \Exception
     */
    public function operator($operatorSymbol, $value)
    {
        if ($this->isEmpty()) {
            throw new \Exception("operator() called without any fields defined!");
        }

        $this->currentField->addComparison($operatorSymbol, $value);

        return $this;
    }

    /**
     * Return the array of comparisons that make up this IdentityObject
     *
     * @return array
     */
    public function getComparisons()
    {
        $arr = [];

        foreach ($this->fields as $field) {
            $arr = array_merge($arr, $field->getComparisons());
        }

        return $arr;
    }

    /* Implement these in your concrete subclass for each query language */
    /**
     * @param $value
     *
     * @return mixed
     */
    abstract public function equalTo($value);

    /**
     * @param $value
     *
     * @return mixed
     */
    abstract public function lessThan($value);

    /**
     * @param $value
     *
     * @return mixed
     */
    abstract public function lessThanEqualTo($value);

    /**
     * @param $value
     *
     * @return mixed
     */
    abstract public function greaterThan($value);

    /**
     * @param $value
     *
     * @return mixed
     */
    abstract public function greaterThanEqualTo($value);

    /**
     * Is our IdentityObject empty of any fields and comparisons?
     *
     * @return bool
     */
    public function isEmpty()
    {
        return empty($this->fields);
    }

    /**
     * Check to see if a field is in fact legal.
     *
     * Silently returns nothing if field is legal, throws an exception if not.
     *
     * @param $fieldName
     *
     * @throws \Exception
     */
    protected function enforceLegalFields($fieldName)
    {
        if (empty($this->legalFields)) {
            return;
        }

        if (!in_array($fieldName, $this->legalFields)) {
            $legalList = implode(', ', $this->legalFields);
            throw new \Exception("{$fieldName} is not a legal field ({$legalList})");
        }
    }

    /**
     * @return string
     */
    public function __toString()
    {
        if (!$this->isEmpty()) {
            $cmps = $this->getComparisons();

            return implode(' ', $cmps);
        }

        return 'Empty ID object';
    }
}
