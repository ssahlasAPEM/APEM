@extends('layouts.master')

@section('title', 'Login')

@section('content')
<title>NAO LOGIN TITLE TEXT</title>
{!! csrf_field() !!}
{!! Auth::user() !!}

{!! Html::image('/images/corp-logo.PNG', 'APEM LOGO' , array('class' => 'apem-logo')) !!}

<div>NAO LOGIN TITLE TEXT</div>

{!! Html::ul($errors->all(), array('class'=>'errors')) !!}

{!! Form::open(array('url' => 'signin','class'=>'form-inline')) !!}

{!! Form::text('username', 'username', array('class' => 'form-control')) !!}
<br>
{!! Form::password('password', array('class' => 'form-control')) !!}
<br>
{!! Form::submit('Login Btn' , array('class' => 'btn btn-primary login-btn')) !!}
{!! Form::close() !!}


@endsection
