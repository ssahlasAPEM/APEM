@extends('layouts.master')

@section('title', 'Login')

@section('content')
<div class="center-block row">

    {!! csrf_field() !!}
    {!! Auth::user() !!}

    {!! Html::image('/images/corp-logo.PNG', 'APEM LOGO' , array('class' => 'apem-logo center-block')) !!}

    <div class="text-center">NAO LOGIN TITLE TEXT</div>

    {!! Html::ul($errors->all(), array('class'=>'errors')) !!}

    {!! Form::open(array('url' => 'login','class'=>'center-block form-signin col-md-4 clearfix')) !!}

    {!! Form::text('username', old('username'), array('class' => 'form-control text-center', 'placeholder'=>'Username')) !!}
    {!! Form::password('password', array('class' => 'form-control text-center', 'placeholder'=>'Password')) !!}
    {!! Form::submit('Login Btn' , array('class' => 'btn btn-default btn-block login-btn')) !!}
    {!! Form::close() !!}
</div>
@endsection
