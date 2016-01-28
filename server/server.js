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
var cors = require('express-cors');
var url = require('url');
var myproxy = require('http-proxy-middleware');
//var mysql = require('mysql');

var app = express();
var isDevelopment = (process.env.NODE_ENV !== 'production');
console.log('IsDevelopment is ', isDevelopment);
console.log(process.env.NODE_ENV);

var static_path = path.join(__dirname, '../');



app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

if (isDevelopment) {
  var authConfig = require('./config/authConfig');
  app.use(session({ secret: authConfig.localAuth.secret })); // session secret
} else {
  app.use(session({ secret: process.env.LOCAL_SECRET }));
}

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
   });
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('listening at ' + port);
  }
});

if (isDevelopment) {

  app.use(cors({
    allowedOrigins: [
      'http://localhost:8080',
      'http://localhost:3000'
    ]
  }));

  var options = {
    target: 'http://localhost:3000', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    proxyTable: {
      'http://localhost:8080' : 'http://localhost:3000'
    }
  };

  var proxy = myproxy('/sockjs-node', options);
  app.use(proxy);

  var WebpackDevServer = require('webpack-dev-server');
  var config = require('../webpack.config');


  var devServer = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    inline: true,
    hot: true,
    quiet: false,
    noInfo: false,
    stats: {colors: true},
    proxy: [{
      path:   /\/api(.*)/,
      target:  'http://localhost:8080/'
    }]
  });
   // devServer.use('/api/events', myproxy(url.parse('http//localhost:8080')));
  devServer.listen(3000, 'localhost', function (err) {
    if (err) console.log(err);
    console.log('Listening at localhost:3000');
  });

}




