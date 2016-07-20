@extends('layouts.master')

@section('title', 'Login')

@section('content')

{!! Html::style('css/login.css') !!}
{!! csrf_field() !!}
{!! Auth::user() !!}

<div class="row gray-border">
  <div class="">
    {!! Html::image('assets/images/corp-logo.PNG', 'APEM LOGO' , array('class' => 'apem-logo center-block')) !!}



    <div class="col-sm-12 top-border gray-bg">
      {!! Form::open(array('url' => 'login','class'=>'form-signin')) !!}
        <div class="text-center gap5">NAO LOGIN TITLE TEXT</div>
        <div class="form-group login-controlls gray-bg">
          {!! Form::text('username', old('username'), array('class' => 'form-control text-center gap5 transparent-input', 'placeholder'=>'Username')) !!}
          {!! Form::password('password', array('class' => 'form-control text-center transparent-input', 'placeholder'=>'Password')) !!}
          {!! Form::submit('Login Btn' , array('class' => 'btn btn-default btn-block login-btn gap2')) !!}
        </div>

      {!! Form::close() !!}

    </div>
  </div>
</div>
@endsection
