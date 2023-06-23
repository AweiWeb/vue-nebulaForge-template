/* eslint-disable guard-for-in */
const path = require('path');
const fs = require('fs');

// 获取node进程中的文件路径
const appDirectory = fs.realpathSync(process.cwd());

// 将相对路径转化为绝对路经
function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

// 默认的文件后缀名
const moduleExtenions = ['.js', '.vue', '.ts'];

//获取文件的全称
// 最后会发返回文件的绝对路径
// 这个resolveFn函数就是resolveApp,吧找到的文件转化为绝对路径
function resolveModule(resolveFn, filePath) {
    // 找到文件中存在的默认的后缀文件
    //翻译存在的后缀名
    const extension = moduleExtenions.find((item) => fs.existsSync(resolveFn(`${filePath}.${item}`)));
    if (extension) {
        return resolveFn(`${filePath}.${extension}`);
    }
    // 不存在默认js
    return resolveFn(`${filePath}.js`);
}

function resolveDefineVariable() {
    const config = {};
    for (const key in process.env) {
        if (key.startsWith('USER_')) {
            config[`process.env.${key}`] = JSON.stringify(process.env[`${key}`]);
        }
    }
    return config;
}

module.exports = {
    appIndex: resolveModule(resolveApp, 'src/main'),
    appSrc: resolveApp('src'), //转化为绝对路经
    appHtml: resolveApp('public/index.html'), //注入html模版的路径
    appPublic: resolveApp('public'), //复制的文件
    appDist: resolveApp('dist'), //打包后的文件目录
    appSvg: resolveApp('src/assets')
};
