<?php namespace app\Infrastructure\Repo;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:00 PM
 */

use App;

/**
 * Class CascadeDeleteTrait
 * @package app\Infrastructure\Repo
 */
trait CascadeDeleteTrait
{

    /**
     * @param $dbId
     * @param $targetClass
     *
     * @throws \Exception
     */
    public function cascadeDelete($dbId, $targetClass)
    {
        switch ($targetClass) {
            case Account::class:
                $deleteMap    = config('doment_mappings')[ Account::class ]['cascadeDeletes'];
                $deleteMethod = 'deleteByAccountId';
                break;
            case Contact::class:
                $deleteMap    = config('doment_mappings')[ Contact::class ]['cascadeDeletes'];
                $deleteMethod = 'deleteByContactId';
                break;
            case MapDictionary::class:
                $deleteMap    = config('doment_mappings')[ MapDictionary::class ]['cascadeDeletes'];
                $deleteMethod = 'deleteByMapDictionaryId';
                break;
            default:
                throw new \Exception("Cannot cascade delete for object type $targetClass");
        }

        foreach ($deleteMap as $interfaceClass) {
            $interface = App::make($interfaceClass);

            if (method_exists($interface, $deleteMethod)) {
                $interface->{$deleteMethod}($dbId);
            }
        }
    }
}
