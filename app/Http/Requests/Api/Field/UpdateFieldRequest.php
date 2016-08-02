<?php namespace app\Http\Requests\Api\Field;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/12/16
 * Time: 12:11 PM
 */

use app\Http\Requests\Request;

/**
 * Class UpdateFieldRequest
 * @package app\Http\Requests\Api\Field
 */
class UpdateFieldRequest extends Request
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
            'data.id'                  => 'required',
            'data.attributes.label'    => 'sometimes',
            'data.attributes.name'     => 'sometimes',
            'data.attributes.type'     => 'sometimes',
            'data.attributes.group'    => 'sometimes',
            'data.attributes.value'    => 'sometimes',
            'data.attributes.options'  => 'sometimes',
            'data.attributes.required' => 'required',
            'data.attributes.visible'  => 'sometimes'
        ];
    }
}
