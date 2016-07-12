<?php

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/8/16
 * Time: 1:00 PM
 */

use Illuminate\Database\Seeder;

class FieldSeeder extends Seeder
{

    public function run()
    {

        $fields = [
            [
                'label'    => 'test field',
                'type'     => 'text',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ]
        ];

        DB::table('fields')->delete();

        foreach ($fields as $field) {
            $newField           = new \App\Models\Field();
            $newField->label    = $field['label'];
            $newField->type     = $field['type'];
            $newField->value    = $field['value'];
            $newField->options  = $field['options'];
            $newField->required = $field['required'];
            $newField->visible  = $field['visible'];
            $newField->save();
        }
    }

}
