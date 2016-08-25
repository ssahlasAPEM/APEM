<?php namespace app\Http\Requests\Api\Event;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 8/13/16
 * Time: 12:11 PM
 */

use app\Http\Requests\Request;

/**
 * Class CreateEventRequest
 * @package app\Http\Requests\Api\Event
 */
class CreateEventRequest extends Request
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'data.attributes.type'                   => 'required',
            'data.relationships.opportunity.data.id' => 'required'
        ];
    }
}
