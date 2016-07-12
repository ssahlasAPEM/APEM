<?php namespace App\Models;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:50 PM
 */

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Field
 * @package App\Models
 */
class Field extends Model
{

    use SoftDeletes;

    protected $table = 'fields';

    protected $fillable = [
        'label',
        'type',
        'value',
        'options',
        'required',
        'visible'
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
}
