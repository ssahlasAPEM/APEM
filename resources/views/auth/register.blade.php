@extends('layouts.master')

@section('title', 'Register')

@section('content')

    <form class="form-register" method="POST" action="/register">
        {!! csrf_field() !!}

        <img alt="APEM LOGO" />
        <h2 class="form-signin-heading">NAO LOGIN TITLE TEXT</h2>
        First Name
        <input type="name" name="first_name" class="form-control" placeholder="first name" required="" autofocus="" value="{{ old('first_name') }}">
        <br>
        Last Name
        <input type="name" name="last_name" class="form-control" placeholder="last name" required="" autofocus="" value="{{ old('last_name') }}">
        <br>
        Email
        <input type="email" name="email" class="form-control" placeholder="email" required="" autofocus="" value="{{ old('email') }}">
        <br>
        Password
        <input type="password" name="password" id="password" class="form-control" placeholder="password" required="">
        <br>
        Confirm Password
        <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" placeholder="password" required="">
        <br>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>

@endsection
