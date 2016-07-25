@extends('layouts.master')

@section('title', 'Login')

@section('content')

{!! Html::style('css/login.css') !!}
{!! csrf_field() !!}
{!! Auth::user() !!}

<div class="row gray-border login-box">
  <div class="">
    {!! Html::image('assets/images/corp-logo.PNG', 'APEM LOGO' , array('class' => 'apem-logo center-block')) !!}

    <div class="col-sm-12 ">
      {!! Form::open(array('url' => 'login','class'=>'form-signin')) !!}
        <!-- <div class="text-center gap5">NAO LOGIN TITLE TEXT</div> -->
        <div class="form-group login-controlls">
          {!! Form::text('username', old('username'), array('class' => 'form-control user-input', 'placeholder'=>'Username')) !!}
          {!! Form::password('password', array('class' => 'form-control gap1 pass-input', 'placeholder'=>'Password')) !!}
          {!! Form::submit('Login' , array('class' => 'btn btn-default btn-block login-btn gap1')) !!}
        </div>

      {!! Form::close() !!}

    </div>
  </div>
</div>
@endsection
