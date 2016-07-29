<?php namespace App\Http\Requests\Api\Opportunity;

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
class CreateOpportunityRequest extends Request
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
            'data.attributes.company'                 => 'sometimes',
            'data.attributes.address'                 => 'sometimes',
            'data.attributes.city'                    => 'sometimes',
            'data.attributes.state-county'            => 'sometimes',
            'data.attributes.mail-code'               => 'sometimes',
            'data.attributes.country'                 => 'sometimes',
            'data.attributes.contact-name'            => 'sometimes',
            'data.attributes.contact-title'           => 'sometimes',
            'data.attributes.contact-phone'           => 'sometimes',
            'data.attributes.contact-email'           => 'sometimes',
            'data.attributes.sales-rep-agent'         => 'sometimes',
            'data.attributes.distributor'             => 'sometimes',
            'data.attributes.apem-sales-person'       => 'sometimes',
            'data.attributes.sra-sales-rep'           => 'sometimes',
            'data.attributes.distributor-salesperson' => 'sometimes',
            'data.attributes.industry'                => 'sometimes',
            'data.attributes.application'             => 'sometimes',
            'data.attributes.reason-for-opp'          => 'sometimes',
            'data.attributes.function'                => 'sometimes',
            'data.attributes.catalog-product'         => 'sometimes',
            'data.attributes.catalog-part-num'        => 'sometimes',
            'data.attributes.customer-part-num'       => 'sometimes',
            'data.attributes.product-type'            => 'sometimes',
            'data.attributes.product-series'          => 'sometimes',
            'data.attributes.apem-part-num'           => 'sometimes',
            'data.attributes.brief-description'       => 'sometimes',
            'data.attributes.extended-description'    => 'sometimes',
            'data.attributes.current-supplier'        => 'sometimes',
            'data.attributes.competitors'             => 'sometimes',
            'data.attributes.year1-sales-vol'         => 'sometimes',
            'data.attributes.year2-sales-vol'         => 'sometimes',
            'data.attributes.year3-sales-vol'         => 'sometimes',
            'data.attributes.currency'                => 'sometimes',
            'data.attributes.target-sales-price'      => 'sometimes',
            'data.attributes.potential-annual-rev'    => 'sometimes',
            'data.attributes.probability-of-win'      => 'sometimes',
            'data.attributes.expected-value'          => 'sometimes',
            'data.attributes.quote-date'              => 'sometimes',
            'data.attributes.sample-date'             => 'sometimes',
            'data.attributes.approval-date'           => 'sometimes',
            'data.attributes.date-rcvd-prod-order'    => 'sometimes',
            'data.attributes.prod-sales-order-num'    => 'sometimes',
            'data.attributes.reason-for-win'          => 'sometimes',
            'data.attributes.date-lost'               => 'sometimes',
            'data.attributes.lost-to-whom'            => 'sometimes',
            'data.attributes.reason-for-loss'         => 'sometimes',
            'data.attributes.comment-field'           => 'sometimes',
            'data.relationships.user.data.id'         => 'required'
        ];
    }
}
