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

        $opportunities = [
            /*[
                'label'    => 'test field',
                'type'     => 'text',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ]*/
        ];

        DB::table('opportunities')->delete();

        foreach ($opportunities as $opportunity) {
            $newOpp           = new \App\Models\Opportunity();
            $newOpp->label    = $opportunity['label'];
            $newOpp->save();
        }
    }

}
