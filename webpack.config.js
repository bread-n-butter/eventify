var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', 'json']
  },

  module: {
    loaders: [
      { test: /\.jsx$/,
        loader: 'react-hot!babel',
      include: path.join(__dirname, 'src') },
      { test: /\.js$/,
          loader: 'react-hot!babel-loader',
        include: path.join(__dirname, 'src') },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'css') },
        { test: /\.css$/,
          loader: 'style!css' }
    ]
  },
  devServer: {
    contentBase: './public/',
    port: 3000,

    // proxy:       [{
    //   // proxy all requests not containing ".hot-update.js"
    //   // regex is still crappy because JS doesn't have negative lookbehind
    //   path:   /\/api(.*)/,
    //   // // koa running on 3001 with koa-send and isomorphic react
    //   target:  'http://localhost:8080'
    // }, {path: /\sockjs-node(.*)/, target: 'http://localhost:8080'}],
    inline: true,
    historyApiFallback: true,

    colors: true,
    stats: 'normal'
  }
};
