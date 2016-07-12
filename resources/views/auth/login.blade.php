@extends('layouts.master')

@section('title', 'Login')

@section('content')
<div class="center-block">

    {!! csrf_field() !!}
    {!! Auth::user() !!}

    {!! Html::image('/images/corp-logo.PNG', 'APEM LOGO' , array('class' => 'apem-logo center-block')) !!}

    <div class="center-text">NAO LOGIN TITLE TEXT</div>

    {!! Html::ul($errors->all(), array('class'=>'errors')) !!}

    {!! Form::open(array('url' => 'login','class'=>'form-signin')) !!}

    {!! Form::text('username', old('username'), array('class' => 'form-control center-text', 'placeholder'=>'Username')) !!}
    {!! Form::password('password', array('class' => 'form-control center-text', 'placeholder'=>'Password')) !!}
    {!! Form::submit('Login Btn' , array('class' => 'btn btn-default btn-block login-btn')) !!}
    {!! Form::close() !!}

@endsection
