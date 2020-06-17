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
  devtool: 'inline-source-map',
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
      title: 'Output Management',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
