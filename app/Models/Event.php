<?php namespace app\Models;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/13/16
 * Time: 3:50 PM
 */

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Event
 * @package app\Models
 */
class Event extends Model
{

    use SoftDeletes;

    protected $table = 'events';

    protected $fillable = [
        'opportunity_id',
        'type',
        'date'
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
