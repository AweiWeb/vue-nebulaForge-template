const Webpack = require('webpack');
// const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { merge } = require('webpack-merge'); // Webpack合并函数
const commonConfig = require('./webpack.common.js');
const paths = require('../paths');
const MinCss = require('mini-css-extract-plugin');
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'web', //目标环境为web环境
  output: {
    path: paths.appDist,
    publicPath: '/',
    filename: 'js/[name].js',
  },
  devServer: {
    host: '127.0.0.0',
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    historyApiFallback: true, // 单页面配置appProxySetup
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(), //Webpack 就会在运行时动态地将修改的模块注入到页面中，从而实现模块热更新的功能
    //new ErrorOverlayPlugin(), //显示错误信息的位置
    new MinCss(),
  ],
  optimization: {
    minimize: false, //关闭压缩
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
};

module.exports = merge(commonConfig, devConfig);
