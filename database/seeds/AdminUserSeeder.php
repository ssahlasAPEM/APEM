<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/8/16
 * Time: 1:00 PM
 */
class AdminUserSeeder extends Seeder {


    public function run()
    {

        $users = [
            [
                'email'      => 'eric@curiousm.com',
                'password'   => 'stardog182',
                'first_name' => 'Eric',
                'last_name'  => 'Meyer'
            ],

            [
                'email'      => 'andrew@curiousm.com',
                'password'   => 'password',
                'first_name' => 'Andrew',
                'last_name'  => 'Engstrom'
            ],

            [
                'email'      => 'ralica@curiousm.com',
                'password'   => 'password',
                'first_name' => 'Ralica',
                'last_name'  => 'Momchilova'
            ],

            [
                'email' => 'testharness@nodomain.tld',
                'password' => 'X9Z2gPd9',
                'first_name' => 'Test',
                'last_name' => 'Harness'
            ]
        ];

        DB::table( 'users' )->delete();

        foreach ($users as $userSeed) {
            $user = new \App\User();
            $user->email      = $userSeed['email'];
            $user->password   = Hash::make($userSeed['password']);
            $user->first_name = $userSeed['first_name'];
            $user->last_name  = $userSeed['last_name'];
            $user->save();
        }
    }

}
