<?php namespace App\Http\Controllers\WebApp;

use App\Http\Controllers\Controller;

class ApplicationController extends Controller
{

    public function showApplication()
    {
        return response()->view('app.main');
    }
}
