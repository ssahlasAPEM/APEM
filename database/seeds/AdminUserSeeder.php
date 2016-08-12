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
            ],

            [
                'username' => 'Ennio',
                'password' => 'ennio',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'Peter',
                'password' => 'peter',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'Steve',
                'password' => 'steve',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'EVerderese',
                'password' => 'victoria',
                'type'     => 'Admin',
                'active'   => true
            ],

            [
                'username' => 'Ahomonoff',
                'password' => 'ahomonoff',
                'type'     => 'User',
                'active'   => true
            ],

            [
                'username' => 'Crobinson',
                'password' => 'crobinson',
                'type'     => 'User',
                'active'   => true
            ],

            [
                'username' => 'Mpalmerino',
                'password' => 'mpalmerino',
                'type'     => 'User',
                'active'   => true
            ],

            [
                'username' => 'Pbrouillette',
                'password' => 'pbrouillette',
                'type'     => 'User',
                'active'   => true
            ],

            [
                'username' => 'Tbillings',
                'password' => 'tbillings',
                'type'     => 'User',
                'active'   => true
            ],

            [
                'username' => 'tsolis',
                'password' => 'switch',
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
