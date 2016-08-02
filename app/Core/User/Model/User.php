<?php namespace app\Core\User\Model;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:35 PM
 */

use app\Core\DomainEntity;
use app\Models\Opportunity;
use Illuminate\Support\Facades\Hash;

/**
 * Class User
 * @package app\Core\User\Model
 */
class User extends DomainEntity
{

    private $username;
    private $type;
    private $active;
    private $numOpportunities;
    private $lastLogin;
    private $password;

    /**
     * @return mixed
     */
    public function getLastLogin()
    {
        return $this->lastLogin;
    }

    /**
     * @param $lastLogin
     */
    public function setLastLogin($lastLogin)
    {
        $this->lastLogin = $lastLogin;
    }

    /**
     * @return mixed
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param $username
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param $password
     */
    public function setPassword($password)
    {
        $this->password = Hash::make($password);
    }

    /**
     * @return mixed
     */
    public function getNumOpportunities()
    {
        return Opportunity::where('user_id', '=', $this->getId())->count();
    }

    /**
     *
     */
    public function setNumOpportunities()
    {
        $this->numOpportunities = Opportunity::where('user_id', '=', $this->getId())->count();
    }

    /**
     * @return mixed
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * @param mixed $active
     */
    public function setActive($active)
    {
        $this->active = $active;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }
}
