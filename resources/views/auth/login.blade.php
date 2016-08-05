@extends('layouts.master')

@section('title', 'Login')

@section('content')

{!! Html::style('css/login.css') !!}
{!! csrf_field() !!}
{!! Auth::user() !!}

<div class="row gray-border login-box">
  <div class="">
    <div class="logo-box">
      {!! Html::image('assets/images/corp-logo.png', 'APEM LOGO' , array('class' => 'apem-logo center-block')) !!}
    </div>
    <div class="col-sm-12 ">
      {!! Form::open(array('route' => 'login','method'=>'post','class'=>'form-signin')) !!}

        <div class="form-group login-controlls">
          {!! Form::text('username', old('username'), array('class' => 'form-control user-input', 'placeholder'=>'Username')) !!}
          {!! Form::password('password', array('class' => 'form-control gap1 pass-input', 'placeholder'=>'Password')) !!}
          {!! Form::submit('Login' , array('class' => 'btn btn-default btn-block login-btn gap1')) !!}
        </div>

      {!! Form::close() !!}

    </div>
  </div>
</div>

<!-- display error messages -->
@if($errors->any())
    <div class="login-error">
        <div class="alert alert-danger">
            @foreach ($errors->all() as $error)
                @if($error === $errors->first())
                    <b>{{ $error }}</b><br/>
                @else
                    {{ $error }}
                @endif
            @endforeach
        </div>
    </div>
@endif

@endsection
