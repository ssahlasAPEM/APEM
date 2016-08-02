<?php namespace App\Http\Requests\Api;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:31 PM
 */

use App\Http\Requests\Request;

/**
 * Class ListRequest
 * @package App\Http\Requests\Api
 */
class ListRequest extends Request
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
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'sometimes|string'
        ];
    }
}
