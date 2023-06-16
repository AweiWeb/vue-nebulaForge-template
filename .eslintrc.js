const off = 0; //关闭校验
const warn = 1; // 警告校验
const error = 3; //报错校验

module.exports = {
    root: true, //eslint的根文件
    // 这里是配置eslint的环境的
    env: {
        browser: true, //浏览器的全局的变量
        es2021: true, //添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12。
        node: true //nodejs的全局变量和作用域
    },
    //继承配置文件
    extends: [
        'eslint:recommended', //eslint官方的推荐
        'plugin:vue/vue3-recommended' //解析校验vue的代码规范配置文件
    ],
    // 对应的是vue-eslint-parser解析器
    parser: '@vue/eslint-parser',
    parserOptions: {
        // 指定 ECMAScript 版本
        ecmaVersion: 2021,
        // 指定导入模块的方式
        sourceType: 'module'
    },
    // 额外的配置和环境变量
    setting: {
        //检测import语法
        'import/resolver': {
            node: {
                extensions: ['.js', '.vue', '.json']
            }
        }
    },
    // 配置的插件
    plugins: ['vue'],
    // 校验的规则
    rules: {
        'import/extensions': [
            off,
            'ignorePackages',
            {
                vue: 'never', //import导入的时候可以省略vue的后缀名
                js: 'never' //省略js的后缀名
            }
        ]
    }
};
