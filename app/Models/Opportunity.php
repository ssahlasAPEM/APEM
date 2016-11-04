<?php namespace app\Models;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:50 PM
 */

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Opportunity
 * @package app\Models
 */
class Opportunity extends Model
{

    use SoftDeletes;

    protected $table = 'opportunities';

    protected $fillable = [
        'user_id',
        'company',
        'address',
        'city',
        'state_county',
        'mail_code',
        'country',
        'contact_name',
        'contact_title',
        'contact_phone',
        'contact_email',
        'sales_rep_agent',
        'distributor',
        'apem_sales_person',
        'sra_sales_rep',
        'distributor_salesperson',
        'industry',
        'application',
        'reason_for_opp',
        'function',
        'catalog_product',
        'catalog_part_num',
        'customer_part_num',
        'product_type',
        'product_series',
        'apem_part_num',
        'brief_description',
        'extended_description',
        'current_supplier',
        'competitors',
        'year1_sales_vol',
        'year2_sales_vol',
        'year3_sales_vol',
        'currency',
        'target_sales_price',
        'potential_annual_rev',
        'probability_of_win',
        'expected_value',
        'quote_date',
        'sample_date',
        'approval_date',
        'date_rcvd_prod_order',
        'prod_sales_order_num',
        'reason_for_win',
        'date_lost',
        'lost_to_whom',
        'reason_for_loss',
        'comment_fields'
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

    /**
     * Get the user for this opportunity.
     */
    public function user()
    {
        return $this->belongsTo('app\Models\User');
    }

    /* We need to disable date mutators, because they brake toArray function on this model */
    public function getDates()
    {
        return array();
    }
}
