<?php

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/8/16
 * Time: 1:00 PM
 */

use Illuminate\Database\Seeder;

class OpportunitySeeder extends Seeder
{

    public function run()
    {

        $faker = Faker\Factory::create();

        $numOpps = 50;

        DB::table('opportunities')->delete();

        for ($i = 0; $i < $numOpps; $i ++) {
            $newOpp                          = new \app\Models\Opportunity();
            $newOpp->user_id                 = $faker->numberBetween($min = 1, $max = 4);
            $newOpp->company                 = $faker->company;
            $newOpp->address                 = $faker->address;
            $newOpp->city                    = $faker->city;
            $newOpp->state_county            = null;
            $newOpp->mail_code               = $faker->postcode;
            $newOpp->country                 = $faker->country;
            $newOpp->contact_name            = $faker->name;
            $newOpp->contact_title           = $faker->title;
            $newOpp->contact_phone           = $faker->phoneNumber;
            $newOpp->contact_email           = $faker->email;
            $newOpp->sales_rep_agent         = $faker->name;
            $newOpp->distributor             = $faker->company;
            $newOpp->apem_sales_person       = $faker->name;
            $newOpp->sra_sales_rep           = $faker->name;
            $newOpp->distributor_salesperson = $faker->name;
            $newOpp->industry                = $faker->word;
            $newOpp->application             = $faker->word;
            $newOpp->reason_for_opp          = $faker->word;
            $newOpp->function                = $faker->word;
            $newOpp->catalog_product         = $faker->word;
            $newOpp->catalog_part_num        = $faker->randomNumber(null);
            $newOpp->customer_part_num       = $faker->randomNumber(null);
            $newOpp->product_type            = $faker->word;
            $newOpp->product_series          = $faker->word;
            $newOpp->apem_part_num           = $faker->randomNumber(null);
            $newOpp->brief_description       = $faker->bs;
            $newOpp->extended_description    = $faker->bs;
            $newOpp->current_supplier        = $faker->company;
            $newOpp->competitors             = $faker->company;
            $newOpp->year1_sales_vol         = $faker->randomNumber(null);
            $newOpp->year2_sales_vol         = $faker->randomNumber(null);
            $newOpp->year3_sales_vol         = $faker->randomNumber(null);
            $newOpp->currency                = $faker->randomNumber(null);
            $newOpp->target_sales_price      = $faker->randomNumber(null);
            $newOpp->potential_annual_rev    = $faker->randomNumber(null);
            $newOpp->probability_of_win      = $faker->randomNumber(null);
            $newOpp->expected_value          = $faker->randomNumber(null);
            $newOpp->quote_date              = $faker->date('Y-m-d');
            $newOpp->sample_date             = $faker->date('Y-m-d');
            $newOpp->approval_date           = $faker->date('Y-m-d');
            $newOpp->date_rcvd_prod_order    = $faker->date('Y-m-d');
            $newOpp->prod_sales_order_num    = $faker->randomNumber(null);
            $newOpp->reason_for_win          = $faker->bs;
            $newOpp->date_lost               = $faker->date('Y-m-d');
            $newOpp->lost_to_whom            = $faker->company;
            $newOpp->reason_for_loss         = $faker->bs;
            $newOpp->comment_field           = $faker->bs;
            $newOpp->save();
        }
    }

}
