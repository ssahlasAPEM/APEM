<?php namespace App\Http\Requests\Api\User;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:31 PM
 */

use App\Http\Requests\Request;

/**
 * Class CreateUserRequest
 * @package App\Http\Requests\Api\User
 */
class CreateUserRequest extends Request
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
            'data.attributes.username'         => 'sometimes',
            'data.attributes.type'             => 'sometimes',
            'data.attributes.active'           => 'sometimes',
            'data.attributes.numOpportunities' => 'sometimes',
            'data.attributes.password'         => 'sometimes'
        ];
    }
}
