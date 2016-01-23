var express = require('express');
var passport = require ('passport');
var morgan = require ('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.use(session({ secret: 'nyan cat' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./auth/passport.js')(passport); //pass passport for configuration