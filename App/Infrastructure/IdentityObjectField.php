<?php namespace App\Infrastructure;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

/**
 * An IdentityObjectField stores an array of comparisons to $field
 *
 * A helper object used by an AbstractIdentityObject, (for example, a
 * SalesforceAccountIdentityObject or SalesforceContactIdentityObject)
 */

class IdentityObjectField
{

    protected $name = null;
    protected $operator = null;
    protected $comparisons = [];
    protected $incomplete = false;

    /**
     * Construct an IdentityObjectField with the name $name
     *
     * @param string $name
     *
     * @throws \Exception
     */
    public function __construct($name)
    {
        if ($name === null) {
            throw new \Exception('IdentityObjectField constructed with a NULL $name!');
        }
        $this->name = $name;
    }

    /**
     * Add a specific comparison, like $field > 10
     *
     * @param string $operator the comparison operator (like '>', '=', etc.)
     * @param string $value    the value to compare against
     */
    public function addComparison($operator, $value)
    {
        // TODO: check for null/bad arguments
        $this->comparisons[] = [
            'name'     => $this->name,
            'operator' => $operator,
            'value'    => $value
        ];
    }

    /**
     * Return the array of comparisons for this IdentityObjectField
     *
     * @return array
     */
    public function getComparisons()
    {
        return $this->comparisons;
    }

    /**
     * Have we been constructed but not given any comparisons?
     *
     * @return bool
     */
    public function isIncomplete()
    {
        return empty($this->comparisons);
    }
}
