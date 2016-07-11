<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/8/16
 * Time: 1:00 PM
 */
class AdminUserSeeder extends Seeder
{

    public function run()
    {

        $users = [
            [
                'username' => 'eric@curiousm.com',
                'password' => 'stardog182'
            ],

            [
                'username' => 'andrew@curiousm.com',
                'password' => 'password'
            ],

            [
                'username' => 'ralica@curiousm.com',
                'password' => 'password'
            ],

            [
                'username' => 'TestHarness',
                'password' => 'X9Z2gPd9'
            ]
        ];

        DB::table('users')->delete();

        foreach ($users as $userSeed) {
            $user           = new \App\User();
            $user->username = $userSeed['username'];
            $user->password = Hash::make($userSeed['password']);
            $user->save();
        }
    }

}
