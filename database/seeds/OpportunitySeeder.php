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

        $industries = [
            '',
            'Telecom',
            'Computers & Peripherals',
            'Medical',
            'Instrumentation',
            'Security',
            'Industrial',
            'Consumer',
            'Transportation (non-auto)',
            'Automotive',
            'Off-road',
            'Appliance',
            'Marine',
            'Mil/Aero'
        ];

        $reasonForOpp = [
            'Delivery Issues',
            'New Program',
            'Price Reduction',
            'Quality Issues',
            'Vendor Reduction',
            'Other'
        ];

        $productType = [
            'Keylock',
            'Indicators',
            'MEC',
            'Industrial Control',
            'Joystick',
            'Membrane/Keyboards',
            'Other',
            'Push Button',
            'Push Wheel',
            'Rocker',
            'Rotary',
            'Rubber Keypad',
            'Slide',
            'Snap Switch',
            'SS Keypad',
            'Toggle',
            'DIP',
            'Knobs',
            'Tact',
            'Trackball',
            'Thumbwheel'
        ];

        $country = [
            'Afghanistan',
            'Albania',
            'Algeria',
            'Andorra',
            'Angola',
            'Anguilla',
            'Antarctica',
            'Antigua',
            'Argentina',
            'Armenia',
            'Aruba',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahamas',
            'Bahrain',
            'Bangladesh',
            'Barbados',
            'Belarus',
            'Belgium',
            'Belize',
            'Benin',
            'Bermuda',
            'Bhutan',
            'Bolivia',
            'Bosnia/Hercegovina',
            'Botswana',
            'Brazil',
            'Brunei',
            'Bulgaria',
            'Burkina Faso',
            'Burma',
            'Burundi',
            'Cambodia Dem.',
            'Cameroon',
            'Canada',
            'Cape Verde',
            'Cayman Is.',
            'Central African Republic',
            'Chad',
            'Chile',
            'China',
            'Cocos Is.',
            'Colombia',
            'Comoros',
            'Congo',
            'Cook Is.',
            'Costa Rica',
            'Cote D Ivoire',
            'Croatia',
            'Cuba',
            'Cyprus',
            'Czech Republic',
            'Denmark',
            'Djibouti',
            'Dominica',
            'Dominican Rep.',
            'Ecuador',
            'Egypt',
            'El Salvador',
            'Equatorial Guinea',
            'Estonia',
            'Ethiopia',
            'Falkland Is.',
            'Faroe Is.',
            'Fiji',
            'Finland',
            'France',
            'French Guiana',
            'French Polynesia',
            'Gabon',
            'Gambia',
            'Georgia',
            'Germany',
            'Ghana',
            'Gibraltar',
            'Greece',
            'Greenland',
            'Grenada',
            'Guadeloupe',
            'Guam',
            'Guatemala',
            'Guinea',
            'Guinea-Bissau',
            'Guyana',
            'Haiti',
            'Honduras',
            'Hong Kong',
            'Hungary',
            'Iceland',
            'India',
            'Indonesia',
            'Iran',
            'Iraq',
            'Ireland',
            'Israel',
            'Italy',
            'Jamaica',
            'Japan',
            'Jordan',
            'Kazakhstan',
            'Kenya',
            'Kiribati',
            'Korea',
            'Kuwait',
            'Laos Peoples Dem. Rep.',
            'Latvia',
            'Lebanon',
            'Lesotho',
            'Liberia',
            'Libyan Arab Jamahiriya',
            'Liechtenstein',
            'Lithuania',
            'Luxembourg',
            'Macau',
            'Madagascar',
            'Malawi',
            'Malaysia',
            'Maldives',
            'Mali',
            'Malta',
            'Marshall Is.',
            'Martinique',
            'Mauritania',
            'Mauritius',
            'Mayotte',
            'Mexico',
            'Micronesia',
            'Moldova',
            'Monaco',
            'Mongolia',
            'Montserrat',
            'Morocco',
            'Mozambique',
            'Myanmar',
            'Namibia',
            'Nauru',
            'Nepal',
            'Neth. Antilles Nevis',
            'Netherlands',
            'New Caledonia',
            'New Zealand',
            'Nicaragua',
            'Niger',
            'Nigeria',
            'Niue',
            'Norfolk Is.',
            'Northern Mariana',
            'Norway',
            'Oman',
            'Pakistan',
            'Palau',
            'Panama',
            'Papua New Guinea',
            'Paraguay',
            'Peru',
            'Philippines',
            'Poland',
            'Portugal',
            'Puerto Rico',
            'Qatar',
            'Reunion',
            'Romania',
            'Russia',
            'Rwanda',
            'Samoa (American)',
            'Samoa (Western)',
            'San Marino',
            'Sao Tome & Principe',
            'Saudi Arabia',
            'Senegal',
            'Seychelles',
            'Sierra Leone',
            'Singapore',
            'Slovakia',
            'Slovenia',
            'Solomon Is.',
            'Somalia',
            'South Africa',
            'Spain',
            'Sri Lanka',
            'St. Kitts & Nevis',
            'St. Lucia',
            'St. Pierre & Miquelon',
            'St. Vincent & Grenadines',
            'Sudan',
            'Suriname',
            'Swaziland',
            'Sweden',
            'Switzerland',
            'Syrian Arab Rep.',
            'Taiwan',
            'Tajikistan',
            'Tanzania',
            'Thailand',
            'Togo',
            'Tonga',
            'Trinidad & Tobago',
            'Tunisia',
            'Turkey',
            'Turkmenistan',
            'Turks & Caicos',
            'Tuvalu',
            'Uganda',
            'Ukraine',
            'United Arab Emirates',
            'United Kingdom',
            'United States',
            'Uruguay',
            'Uzbeistan',
            'Vanuatu',
            'Vatican City',
            'Venezuela',
            'Vietnam',
            'Virgin Is. (Br.)',
            'Virgin Is. (U.S.)',
            'Wallis & Futuna',
            'Yemen Rep.',
            'Yugoslavia',
            'Zaire',
            'Zambia',
            'Zimbabwe'
        ];

        for ($i = 0; $i < $numOpps; $i ++) {
            $newOpp                          = new \app\Models\Opportunity();
            $newOpp->user_id                 = $faker->numberBetween($min = 1, $max = 4);
            $newOpp->draft                   = $faker->numberBetween($min = 0, $max = 1);
            $newOpp->status                  = null;
            $newOpp->stage                   = 'quote';
            $newOpp->company                 = $faker->company;
            $newOpp->address                 = $faker->address;
            $newOpp->city                    = $faker->city;
            $newOpp->state_county            = null;
            $newOpp->mail_code               = $faker->postcode;
            $newOpp->country                 = $country[array_rand($country)];
            $newOpp->contact_name            = $faker->name;
            $newOpp->contact_title           = $faker->title;
            $newOpp->contact_phone           = $faker->phoneNumber;
            $newOpp->contact_email           = $faker->email;
            $newOpp->sales_rep_agent         = $faker->name;
            $newOpp->distributor             = $faker->company;
            $newOpp->apem_sales_person       = $faker->name;
            $newOpp->sra_sales_rep           = $faker->name;
            $newOpp->distributor_salesperson = $faker->name;
            $newOpp->industry                = $industries[array_rand($industries)];
            $newOpp->application             = $faker->word;
            $newOpp->reason_for_opp          = $reasonForOpp[array_rand($reasonForOpp)];
            $newOpp->function                = $faker->word;
            $newOpp->catalog_product         = $faker->word;
            $newOpp->catalog_part_num        = $faker->randomNumber(null);
            $newOpp->customer_part_num       = $faker->randomNumber(null);
            $newOpp->product_type            = $productType[array_rand($productType)];
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
            $newOpp->reason_for_loss         = null;
            $newOpp->comment_field           = $faker->bs;
            $newOpp->save();
        }
    }

}
