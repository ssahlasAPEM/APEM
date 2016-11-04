<?php namespace app\Models;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:50 PM
 */

use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class User
 */
class User extends \app\User
{

    use SoftDeletes;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'type',
        'active',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected $guarded = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    /**
     * Get the opportunities for the user.
     */
    public function opportunities()
    {
        return $this->hasMany('app\Models\Opportunity');
    }
}
