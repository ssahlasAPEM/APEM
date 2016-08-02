<?php namespace app\Http\Controllers\WebApp;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:19 PM
 */

use app\Http\Controllers\Controller;

class ApplicationController extends Controller
{

    public function showApplication()
    {
        return response()->view('app.main');
    }
}
