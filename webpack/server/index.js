const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server'); // 本地起一个 http 服务，可配置指定其端口/热更新...
const chalk = require('chalk'); // 终端字符串样式个性化自定义
const webpackDevConfig = require('../config/webpack.dev');
const detect = require('detect-port-alt'); // 端口检测
const { SERVER_HOST, SERVER_PORT, divider } = require('../conf');
const ip = require('ip'); // 获取 IP 地址实用程序

// 获取webpack编译的对象
const compiler = Webpack(webpackDevConfig);
// 获取dev的devServer的参数 开发服务器的参数
const devServerOptions = {
  ...webpackDevConfig.devServer,
};
//这里创建了一个server实例， 可以创建出一个带有实时重载功能的开发服务器实例
const server = new WebpackDevServer(compiler, devServerOptions);

// 端口处理
// 引入的detect-port-alt端口检测包进行检测
async function choosePort(port, host) {
  const resPort = await detect(port, host);
  if (resPort === port) {
    return resPort;
  }
  const message =
    process.platform !== 'win32' && port < 1024
      ? 'Admin permissions are required to run a server on a port below 1024.'
      : `Something is already running on port ${port}.`;

  if (process.stdout.isTTY) {
    console.log(chalk.yellow(message));
    return resPort;
  }
  console.log(chalk.red(message));
  return null;
}

// 终端日志log输出显示
const logger = {
  // 失败后控制它输出的东西
  error: (err) => {
    console.error(chalk.red(err));
  },
  // 控制台打印的东西
  // 这里既是divider 分割线
  // 成功后控制台输出的
  start: (port, host) => {
    console.log(`Server started! ${chalk.green('✓')}`);
    console.log(`
    ${chalk.bold('App running at:')}
    ${chalk.gray(divider)}
    - Local: ${chalk.blue(`  http://${host}:${port}`)}
    - Network: ${chalk.blue(`http://${ip.address()}:${port}`)}
    ${chalk.gray(divider)}

    Note that the development build is not optimized.
    To create a production build, run npm run build.

    ${chalk.magenta(`Press ${chalk.italic('Ctrl+c')} to stop`)}
        `);
  },
};

// 开启本地服务入口
async function startServer() {
  // 这里就是真正的启动服务器
  // 这里对端口和域名进行检测
  const resPort = await choosePort(SERVER_PORT, SERVER_HOST);
  try {
    if (resPort !== null) {
      //启动服务器，开启监听
      server.listen(resPort, SERVER_HOST, (err) => {
        if (err) {
          return logger.error(err.message);
        }
        return logger.start(resPort, SERVER_HOST);
      });
    }
  } catch (error) {
    console.log(chalk.red(error.message));
  }
}

startServer();
