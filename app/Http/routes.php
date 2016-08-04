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
Route::get('logout', 'Auth\AuthController@getLogout');

Route::post('login',[
    'as' => 'login',
    'uses' => 'Auth\AuthController@postLogin'
]);

/*
|---------------------------------------------------------------------------
| JSON Api
|---------------------------------------------------------------------------
 */
Route::group(
    ['middleware' => ['auth.api'], 'prefix' => 'api/v1'],
    function () {

        /*
        |--------------------------------------------------------------------------
        | Users
        |--------------------------------------------------------------------------
        */
        Route::get(
            'profiles',
            [
                'as'   => 'profiles',
                'uses' => 'JsonApi\UserController@getLoggedInUser'
            ]
        );

        Route::get(
            'users/{id}/{relationshipType}',
            [
                'as'   => 'userRelations',
                'uses' => 'JsonApi\UserController@relationships'
            ]
        );

        Route::resource(
            'users',
            'JsonApi\UserController',
            ['only' => ['index', 'show', 'store', 'update', 'destroy']]
        );

        /*
        |--------------------------------------------------------------------------
        | Fields
        |--------------------------------------------------------------------------
        */
        Route::get(
            'fields/{id}/{relationshipType}',
            [
                'as'   => 'fieldRelations',
                'uses' => 'JsonApi\FieldController@relationships'
            ]
        );

        Route::resource(
            'fields',
            'JsonApi\FieldController',
            ['only' => ['index', 'show', 'store', 'update', 'destroy']]
        );

        /*
        |--------------------------------------------------------------------------
        | Opportunities
        |--------------------------------------------------------------------------
        */
        Route::get(
            'opportunities/{id}/{relationshipType}',
            [
                'as'   => 'opportunityRelations',
                'uses' => 'JsonApi\OpportunityController@relationships'
            ]
        );

        Route::resource(
            'opportunities',
            'JsonApi\OpportunityController',
            ['only' => ['index', 'show', 'store', 'update', 'destroy']]
        );
    }
);

/*
|---------------------------------------------------------------------------
| Main Ember Application
|---------------------------------------------------------------------------
 */
Route::get(
    'dashboard/{emberApp?}',
    [
        'as'   => 'app',
        'uses' => 'WebApp\ApplicationController@showApplication'
    ]
)->where('emberApp', '.*');
