const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
  ],

  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.[hash].js',
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { modules: true },
            },
            'sass-loader',
          ],
        }),
      }
    ],
  },

  devtool: '#source-map',

  plugins: [
    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.ejs'),
      filename: 'client.ejs',
      markup: `
        <div id="app"><%- markup %></div>
      `,
    }),

    new ExtractTextPlugin('styles.css'),
  ],
};

const serverConfig = {
  entry: [
    path.resolve(__dirname, 'src', 'serverRender.js'),
  ],

  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'serverRender.js',
    libraryTarget: 'commonjs2',
  },

  target: 'node',
  externals: [nodeExternals()],

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: { modules: true },
          },
        }),
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],

  resolve: {
    modules: ["node_modules", "shared"]
  }
};

module.exports = [clientConfig, serverConfig];
