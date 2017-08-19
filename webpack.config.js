const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const homeCss = new ExtractTextPlugin('home.css');
const workCss = new ExtractTextPlugin('work.css');

const clientConfig = {
  entry: {
    home: path.resolve(__dirname, 'src', 'index.js'),
    work: path.resolve(__dirname, 'src', 'work.js'),
  },

  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.[hash].js',
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        include: path.resolve(__dirname, 'src', 'screens', 'App'),
        test: /\.css$/,
        loader: homeCss.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        include: path.resolve(__dirname, 'src', 'screens', 'Work'),
        test: /\.css$/,
        loader: workCss.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
            },
            'sass-loader',
          ],
        }),
      }
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.home.ejs'),
      filename: 'home.ejs',
      markup: `
        <div id="app"><%- markup %></div>
      `,
      inject: false,
      minify: {
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.work.ejs'),
      filename: 'work.ejs',
      markup: `
        <div id="app"><%- markup %></div>
      `,
      inject: false,
      minify: {
        collapseWhitespace: true,
      },
    }),

    // new ExtractTextPlugin('styles.css'),
    homeCss,
    workCss,
  ],

  resolve: {
    modules: ["node_modules", "shared"]
  }
};

const serverConfig = {
  entry: {
    home: path.resolve(__dirname, 'src', 'serverRender.home.js'),
    work: path.resolve(__dirname, 'src', 'serverRender.work.js'),
  },

  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'serverRender.[name].js',
    libraryTarget: 'commonjs2',
  },

  target: 'node',
  externals: [nodeExternals()],

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        include: path.resolve(__dirname, 'src', 'screens', 'App'),
        test: /\.css$/,
        loader: homeCss.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        include: path.resolve(__dirname, 'src', 'screens', 'Work'),
        test: /\.css$/,
        loader: workCss.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
            },
            'sass-loader',
          ],
        }),
      }
    ],
  },

  plugins: [
    // new ExtractTextPlugin('styles.css'),
    homeCss,
    workCss
  ],

  resolve: {
    modules: ["node_modules", "shared"]
  }
};

module.exports = [clientConfig, serverConfig];
