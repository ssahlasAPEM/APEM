@extends('layouts.master')

@section('title', 'Login')

<form class="form-signin" method="POST" action="/auth/login">
    {!! csrf_field() !!}

    <img alt="APEM LOGO" />
    <h2 class="form-signin-heading">NAO LOGIN TITLE TEXT</h2>
    Email
    <input type="email" name="email" class="form-control" placeholder="username" required="" autofocus="" value="{{ old('email') }}">
    <br>
    Password
    <input type="password" name="password" id="password" class="form-control" placeholder="password" required="">
    <br>
    <input type="checkbox" name="remember"> Remember Me
    <br>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
</form>
