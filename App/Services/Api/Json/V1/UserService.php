<?php namespace App\Services\Api\Json\V1;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:19 PM
 */

use App\Core\User\Repository\UserInterface;

/**
 * Class UserService
 * @package App\Services\Api\Json\V1
 */
class UserService extends RESTFULService
{

    /**
     * @var UserInterface
     */
    private $userInterface;

    /**
     * @param UserInterface $userInterface
     */
    public function __construct(UserInterface $userInterface)
    {
        parent::__construct();
        $this->userInterface = $userInterface;
        $this->setValidIncludes(['custom']);
    }

    public function getInterface()
    {
        return $this->userInterface;
    }

    /**
     * Fetch a single page of data where the user's name is similar to $name
     *
     * @param $limit
     * @param $offset
     * @param $name
     *
     * @return mixed
     */
    public function fetchPageByName($limit, $offset, $name)
    {
        try {
            $users = $this->userInterface->searchByNamePaginated($limit, $offset, $name);
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }

        return $users;
    }

    /**
     * Fetch a single page of data
     *
     * @param $limit
     * @param $offset
     *
     * @return mixed
     */
    public function fetchPage($limit, $offset)
    {
        try {
            if (is_null($limit) && is_null($offset)) {
                $users = $this->userInterface->findAll();

                return $users;
            }

            $users = $this->userInterface->findAllPaginated($limit, $offset);

            return $users;
        } catch (\Exception $exception) {
            return $this->errorResponseFactory->makeErrorResponse($exception);
        }
    }
}
