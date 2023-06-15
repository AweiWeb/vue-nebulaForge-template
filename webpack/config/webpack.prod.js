const paths = require('../paths');
const { merge } = require('webpack-merge');
const config = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProConfig = {
  mode: 'production', //生产模式下
  target: 'browserslist',
  devtool: 'source-map',
  //出口
  output: {
    path: paths.appDist,
    filename: 'js/[name].[contenthashL10].js', //文件目录
    chunkFilename: 'js/[name].[contenthashL10].chunk.js', //按需打包文件名
    assetModuleFilename: 'images/[hash:10][ext][query]', //图片路径
    clean: true, //每次打包后清空之前的目录
  },
  plugins: [
    //   处理css本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
      ignoreOrder: true,
    }),
    new CompressionWebpackPlugin({
      //这里是压缩静态资源
      test: /\.js$|\.html$|.\css/,
      threshold: 10240, //处理大于这个文件限制的
      deleteOriginalAssets: false, //是否删除所有资源
    }),
    //  复制public里的文件
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.appPublic,
          to: paths.appDist,
          //   忽略复制index.html
          //   因为上面会创建一个html
          globOptions: {
            ignore: ['**/index.html'],
            dot: true, //
            gitignore: true, //这个的作用是 检查 .gitignore文件中是否有要忽略的文件然后再决定是否复制文件
          },
        },
      ],
    }),
  ].filter(Boolean),
  //   优化
  optimization: {
    minimizer: [
      // https://github.com/webpack-contrib/terser-webpack-plugin#extractcomments
      new TerserWebpackPlugin({
        extractComments: false, //禁止注释
        terserOptions: {
          //缩小选项
          compress: {
            pure_funcs: ['console.log', 'console.warn'], //为一个数组，您可以传递一个名称数组，Terser 将假定这些函数不会产生副作用。危险：不会检查名称是否在范围内重新定义
          },
        },
      }), //压缩js
      new CssMinimizerWebpackPlugin(), //压缩css
    ],
    //   默认情况下，它只会影响到按需加载的 chunks，因为修改 initial chunks 会影响到项目的 HTML 文件中的脚本标签。
    splitChunks: {
      chunks: 'all',
      //  缓存组可以继承和/或覆盖来自 splitChunks.* 的任何选项
      cacheGroups: {
        //   单独打包
        lib: {
          test: /[/\\]node_modules[/\\]/,
          name: 'lib',
          priority: 30,
        },
        vue: {
          test: /[\\/]node_modules[\\/]vue(.*)[\\/]/,
          name: 'vue-chunk',
          priority: 40,
        },
      },
    },
  },
};

// 融合共用的配置
module.exports = merge(config, ProConfig);
