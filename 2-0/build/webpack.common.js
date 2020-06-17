const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/another-module.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
    new webpack.optimize.RuntimeChunkPlugin({
      name: 'common', // 指定公共 bundle 的名称。
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '/dist'),
  },
};
