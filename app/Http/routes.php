<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*
|---------------------------------------------------------------------------
| Authentication
|---------------------------------------------------------------------------
 */
Route::get('/', 'Auth\AuthController@getLogin');
Route::post('login', 'Auth\AuthController@postLogin');
Route::get('logout', 'Auth\AuthController@getLogout');

/*
|---------------------------------------------------------------------------
| Main Ember Application
|---------------------------------------------------------------------------
 */
Route::get(
    'dashboard',
    [
        'as'   => 'dashboard',
        'uses' => 'WebApp\ApplicationController@showApplication'
    ]
);
