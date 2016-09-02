<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>APEM</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <base href="/" />
<meta name="apem/config/environment" content="%7B%22modulePrefix%22%3A%22apem%22%2C%22environment%22%3A%22development%22%2C%22baseURL%22%3A%22/%22%2C%22podModulePrefix%22%3A%22apem/pods%22%2C%22locationType%22%3A%22history%22%2C%22contentSecurityPolicy%22%3A%7B%22default-src%22%3A%22%27self%27%20*%22%2C%22script-src%22%3A%22%27unsafe-inline%27%20%27unsafe-eval%27%20%27self%27%20https%3A//notify.bugsnag.com%20*%22%2C%22font-src%22%3A%22%27self%27%20*%20data%3A%3B%22%2C%22connect-src%22%3A%22%27self%27%20*%22%2C%22img-src%22%3A%22%27self%27%20data%3A%20*%22%2C%22style-src%22%3A%22%27unsafe-inline%27%20%27self%27%20*%22%2C%22media-src%22%3A%22%27self%27%20*%22%7D%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%7D%2C%22APP%22%3A%7B%22usingCors%22%3Atrue%2C%22apiUrl%22%3A%22http%3A//apem.herokuapp.com%22%2C%22name%22%3A%22apem%22%2C%22version%22%3A%220.0.0+a05332a3%22%7D%2C%22ember-cli-mirage%22%3A%7B%22enabled%22%3Afalse%2C%22usingProxy%22%3Afalse%7D%2C%22contentSecurityPolicyHeader%22%3A%22Content-Security-Policy-Report-Only%22%2C%22something%22%3A%22test%22%7D" />

    <link rel="stylesheet" href="assets/vendor.css">
    <link rel="stylesheet" href="assets/apem.css">

    <style>
    .ember-application .loading-spin.no-ember {
      display: none;
    }
    .loading-spin:before {
      position: absolute;
      content: '';
      top: 0;
      left: 50%;
      border-radius: 500rem;
      border: 0.2em solid rgba(255, 255, 255, 0.15);
    }
    .loading-spin:after, .loading-spin:before {
      /*width: 2.28571429rem;
      height: 2.28571429rem;*/
      width: 50px;
      height: 50px;
      left: 49.94%;
      margin: 0 0 0 -6.342857rem;
      margin-top: 39.80vh;
    }
    .loading-spin{
      margin-left: auto;
      margin-right: auto;
      width:193px;
      height:48px;
      background-image: url(assets/images/corp-logo.png);
      background-size: contain;
      background-position: center;
      min-width: 2.28571429rem;
      padding-top: 3.07142857rem;
      text-align: center;
      margin-top: 40vh;
    }

    .loading-spin:after{
      position: absolute;
      content: '';
      top: 0;
      left: 49.94%;
      -webkit-animation: loader .6s linear;
      animation: loader .6s linear;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      border-radius: 500rem;
      border-color: #767676 #fffcfc transparent;
      border-style: solid;
      border-width: .2em;
      box-shadow: 0 0 0 1px #0000;
    }
    </style>

    
  </head>
  <body>
    

    <div class="loading-spin no-ember"></div>
    <script src="assets/vendor.js"></script>
    <script src="assets/apem.js"></script>

    
  </body>
</html>
