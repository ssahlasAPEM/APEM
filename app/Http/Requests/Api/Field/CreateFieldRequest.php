<?php namespace App\Http\Requests\Api\Field;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/12/16
 * Time: 12:11 PM
 */

use App\Http\Requests\Request;

/**
 * Class CreateFieldRequest
 * @package App\Http\Requests\Api\Field
 */
class CreateFieldRequest extends Request
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
            'data.attributes.label'    => 'required',
            'data.attributes.name'     => 'required',
            'data.attributes.type'     => 'required',
            'data.attributes.group'    => 'required',
            'data.attributes.value'    => 'sometimes',
            'data.attributes.options'  => 'sometimes',
            'data.attributes.required' => 'required',
            'data.attributes.visible'  => 'required'
        ];
    }
}
