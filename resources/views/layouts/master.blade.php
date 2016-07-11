<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>APEM - @yield('title')</title>
        <!--[if IE]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Latest compiled and minified CSS -->
        {!!Html::style('//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css')!!}

        <!-- Icon Font -->
        {!!Html::style('//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css')!!}

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        {!!Html::script('https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js')!!}
        <!-- Bootstrap's JavaScript plugins) -->
        {!!Html::script('//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js')!!}

        <!-- Custom CSS -->
    </head>

    <body>
        <div class="container">
            <div class="content">
                <!-- MAIN CONTENT -->
                @yield('content')
                <!-- /END MAIN CONTENT -->
            </div>

            <footer>
                APEM Home | Help
            </footer>
        </div>
    </body>
</html>
