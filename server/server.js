var express = require('express');
var path = require('path');
var webpack = require('webpack');
var port = process.env.PORT || 8080;
var passport = require ('passport');
var morgan = require ('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var authConfig = require('./config/authConfig');
//var mysql = require('mysql');

var app = express();
var isDevelopment = (process.env.NODE_ENV !== 'production');
console.log('IsDevelopment is ', isDevelopment);
console.log(process.env.NODE_ENV);

var static_path = path.join(__dirname, '../');


app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.use(session({ secret: authConfig.localAuth.secret })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

require('./auth/passport.js')(passport); //pass passport for configuration
require('./middleware.js')(app, express, passport);

app.use(express.static(static_path))
   .get('/', function(req, res) {
     res.sendFile('index.html', {
       root: static_path
     });
   })
   .listen(port, function(err) {
     if (err) {
       console.log(err);
     } else {
       console.log('listening at ' + port);
     }
   });

if (isDevelopment) {
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('../webpack.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) console.log(err);
    console.log('Listening at localhost:3000');
  });
}




