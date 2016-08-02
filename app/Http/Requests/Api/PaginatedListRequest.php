<?php namespace app\Http\Requests\Api;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:31 PM
 */

use app\Http\Requests\Request;

/**
 * Class PaginatedListRequest
 * @package app\Http\Requests\Api
 */
class PaginatedListRequest extends Request
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
            'per_page' => 'required|numeric|max:500',
            'page'     => 'sometimes|numeric',
            'name'     => 'sometimes|string'
        ];
    }
}
