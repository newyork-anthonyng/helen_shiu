const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    home: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      path.resolve(__dirname, 'src', 'index.js'),
    ],
    work: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      path.resolve(__dirname, 'src', 'work.js'),
    ],
  },

  output: {
    path: path.resolve(__dirname),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          'sass-loader',
        ],
      },
    ],
  },

  devtool: '#source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  resolve: {
    modules: ["node_modules", "shared"]
  }
};
