const paths = require('../paths');
const { Development, Production } = require('../env');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const {
  imageInlineSizeLimit,
  imageBase64Path,
  shouldBase64FromFileEnd,
} = require('../conf');
// 封装样式函数
// 返回的一个数组，用在use中

//返回处理公共样式的函数
const cssLoaders = (importLoaders) => [
  // 执行顺序从后到前 less-loader -> postcss-loader -> css-loader -> style-loader/MiniCssExtractPlugin.loader
  Development ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader', // 主要是解析css文件中的@import和url语句，处理css-modules，并将结果作为一个js模块返回
    options: {
      modules: false,
      sourceMap: Development, // 开发环境开启
      importLoaders, // 执行顺序: 需要先被 less-loader postcss-loader (所以这里设置为 2)
    },
  },
  {
    loader: 'postcss-loader', // 进一步处理css文件，比如添加浏览器前缀，压缩 CSS 等
    options: {
      postcssOptions: {
        plugins: [
          require('postcss-flexbugs-fixes'), // 用于修复一些和 flex 布局相关的 bug
          Production && [
            'postcss-preset-env', // 最新的 CSS 语法转换为目标环境的浏览器能够理解的 CSS 语法，目的是使开发者不用考虑浏览器兼容问题。
            {
              // 使用 autoprefixer 来自动添加浏览器头
              autoprefixer: {
                grid: true,
                flexbox: 'no-2009',
              },
              stage: 3,
            },
          ],
        ].filter(Boolean),
      },
    },
  },
];
// 开发与生产模式相同的情况下
const config = {
  // 入口文件
  entry: {
    app: paths.appIndex,
  },
  // 缓存模块
  cache: {
    //  收集在反序列化期间未分配的使用的内存，在cache.type为filesystem
    type: 'filesystem',
    buildDependencies: {
      // 来获取最新的配置，和依赖项
      // This makes all dependencies of this file - build dependencies
      config: [__filename],
      // 默认情况下 webpack 与 loader 是构建依赖。
    },
  },
  //   解析模块
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      // 配置别名
      '@': paths.appSrc,
    },
    // fallback: {
    //   querystring: require.resolve('querystring-es3'),
    // },
  },
  module: {
    //校验规则
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          //  排除解析
          exclude: [/node_modules/, /(.|_)min\.js$/],
        },
      },
      {
        test: /\.css$/,
        use: cssLoaders(1),
      },
      //   less-loader是新加的loader ，在后面所以传2
      {
        test: /\.less$/,
        use: [
          ...cssLoaders(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: Development,
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
        parser: {
          dataUrlCondition: (source, { filename }) => {
            //这里进行判断
            // 提供函数时，返回 true 值时告知 webpack 将模块作为一个 Base64 编码的字符串注入到包中， 否则模块文件会被生成到输出的目标目录中。
            // 文件目录包含base64文件
            if (filename.includes(imageBase64Path)) {
              return true;
            }
            // 尾部扫描
            if (shouldBase64FromFileEnd && filename.includes(imageBase64Path)) {
              return true;
            }
            // 文件小于限制
            if (source.length <= imageInlineSizeLimit) {
              return true;
            }
            // 否则
            return false;
          },
        },
      },
      //    其他资源
      {
        test: /\.(eot|ttf|woff|woff2?)$/,
        type: 'asset/resource',
      },
      //   解析vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          //   开启缓存，第二次加载会更快
          cacheDirectory: true, //开启babel文件缓存
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      cache: true,
      env: process.env.ENV || '',
    }),
    // 预加载插件
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      // include: ['', ''], //这里是预加载的路由
    }),
    new VueLoaderPlugin(),
    // DefinePlugin定义的环境变量是给代码使用 从而解决vue警告的问题
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
};

module.exports = config;
