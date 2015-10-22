'use strict';


var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');


// Temporary compatibility until update to Node v4 to solve post-css:
// Module build failed: ReferenceError: Promise is not defined
require('babel/polyfill');


module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'Component.js',
    path: path.resolve('lib'),
    library: 'Component',
    libraryTarget: 'commonjs2',
    sourcePrefix: ''
  },
  target: 'node',
  plugins: [
    new ExtractTextPlugin('Component.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
  module: {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules')},
      {test: /\.js$/, loader: 'babel', include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true},
  externals: {
    react: {
      commonjs2: 'react'
    }
  }
};
