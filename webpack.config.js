var path = require('path');
var webpack = require('webpack');

var componetn = require('./component.');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
      }]
  }
}
