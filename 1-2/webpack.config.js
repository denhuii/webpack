const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    // print: './src/print.js',
  },
  devtool: 'source-map',
  output: {
    // filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader'],
  //     },
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: ['file-loader'],
  //     },
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/,
  //       use: ['file-loader'],
  //     },
  //   ],
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'tree shaking',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // development 模式没有tree shaking 功能，需要通过配置选项开启，共2布
  // 第一步,( 生产模式不用此步)
  optimization: {
    usedExports: true,
  },
  // 第二步 ， json："sideEffects": ["*.css"],
};
