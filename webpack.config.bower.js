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
    filename: require('./package.json').name + '.js',
    path: path.resolve('build'),
    library: 'Component',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin(require('./package.json').name + '.css'),
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
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }
};
