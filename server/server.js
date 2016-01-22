var express = require('express');
var path = require('path');
var webpack = require('webpack');
var port = process.env.PORT || 8080;
var WebpackDevServer = require('webpack-dev-server');

var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, '../');
console.log(process.env.NODE_ENV);

app.use(express.static(static_path))
.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: static_path
  });
}).listen(port, function(err) {
  if (err) {
    console.log(error);
  } else {
    console.log('listening at ' + port);
  }
});

if (isDevelopment) {
  var config = require('../webpack.config');
  var webpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) { console.log(err) }
    console.log('Listening at localhost:3000');
  });
}
