const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  resolve: {
    modules: ['node_modules', 'shared'],
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'views/index.ejs',
      template: 'src/views/index.ejs',
      // The ejs syntax <%- %> puts unescaped raw output
      markup: '<div id="app"><%- markup %></div>',
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/views/index.ejs',
      markup: '<!-- For webpack-dev-server --><div id="app"></div>',
    }),

    new CleanWebpackPlugin(['dist'], {}),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8000,
  },
};
