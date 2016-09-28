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
                'username' => 'TestAdmin',
                'password' => 'password',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'TestUser',
                'password' => 'password',
                'type'     => 'User',
                'active'   => true
            ],

            [
                'username' => 'TestHarness',
                'password' => 'X9Z2gPd9',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'NeilMurphy',
                'password' => 'NeilMurphy',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'BobPiotrowski',
                'password' => 'BobPiotrowski',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'BryanMurphy',
                'password' => 'BryanMurphy',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'PeterBrouillette',
                'password' => 'PeterBrouillette',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'AllenHomonoff',
                'password' => 'AllenHomonoff',
                'type'     => 'User',
                'active'   => true
            ],

            [
                'username' => 'BambiTierney',
                'password' => 'BambiTierney',
                'type'     => 'User',
                'active'   => true
            ],

            [
                'username' => 'StephenSahlas',
                'password' => 'StephenSahlas',
                'type'     => 'User',
                'active'   => true
            ],

            [
                'username' => 'TonySolis',
                'password' => 'TonySolis',
                'type'     => 'User',
                'active'   => true
            ]
        ];

        DB::table('users')->delete();

        foreach ($users as $userSeed) {
            $user            = new \app\User();
            $user->username  = $userSeed['username'];
            $user->password  = Hash::make($userSeed['password']);
            $user->type      = $userSeed['type'];
            $user->active    = $userSeed['active'];
            $user->api_token = str_random(60);
            $user->save();
        }
    }

}
