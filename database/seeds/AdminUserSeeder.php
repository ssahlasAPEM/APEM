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
                'password' => 'stardog182',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'andrew@curiousm.com',
                'password' => 'password',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'ralica@curiousm.com',
                'password' => 'password',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'TestHarness',
                'password' => 'X9Z2gPd9',
                'type'     => 'Admin',
                'active'   => true
            ]
        ];

        DB::table('users')->delete();

        foreach ($users as $userSeed) {
            $user            = new \App\User();
            $user->username  = $userSeed['username'];
            $user->password  = Hash::make($userSeed['password']);
            $user->type      = $userSeed['type'];
            $user->active    = $userSeed['active'];
            $user->api_token = str_random(60);
            $user->save();
        }
    }

}
