<?php namespace App\Http\Requests\Api\User;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:31 PM
 */

use App\Http\Requests\Request;

/**
 * Class UpdateUserRequest
 * @package App\Http\Requests\Api\User
 */
class UpdateUserRequest extends Request
{

    /**
     * Determine if the data.attributes is authorized to make this request.
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
            'data.id'                          => 'required',
            'data.attributes.username'         => 'required',
            'data.attributes.type'             => 'required',
            'data.attributes.active'           => 'required',
            'data.attributes.numOpportunities' => 'sometimes',
            'data.attributes.password'         => 'sometimes'
        ];
    }
}
