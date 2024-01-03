# 使用 ESLint（或TSLint）、Prettier 和 Stylelint 来规范vue3+ts代码

思路：禁掉 ESLint 中与 Prettier 冲突的规则，然后使用 Prettier 做格式化， ESLint 做代码校验。

```
eslint：ESLint 核心模块
prettier：Prettier 核心模块
eslint-plugin-prettier：ESLint 插件，该插件用于将 Prettier 的格式化规则集成到 ESLint 中
eslint-config-prettier：ESLint 配置，它将禁用与 Prettier 格式化规则冲突的 ESLint 规则
eslint-plugin-vue：ESLint 插件，该插件用于提供针对 Vue.js 代码的规则和检查
```

## [eslint](https://github.com/eslint/eslint)

```bash
npm init @eslint/config
```

选择vue和ts会发现package.json多了以下配置内容

```bash
"eslint": "^8.53.0",
"eslint-plugin-vue": "^9.18.1",
"@typescript-eslint/eslint-plugin": "^6.11.0",
"@typescript-eslint/parser": "^6.11.0",
```

> eslint-plugin-vue 还提供了其他的规则包，具体可看官方文档[eslint-plugin-vue](https://eslint.vuejs.org/user-guide/#installation)。
> @typescript-eslint/parser来解析.ts文件
> ESLint 本身也提供一些内置的规则包，如：eslint:recommended，

生成了如下配置文件

```js
//.eslintrc.js
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential', //加上防止错误或意外行为的规则。
        'plugin:vue/vue3-recommended' //加上强制执行主观社区默认值的规则，(手动增加的配置)
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        extraFileExtensions: ['.vue'] //(手动增加的配置)
    },
    plugins: ['@typescript-eslint', 'vue'],
    rules: {}
}
```

eslintignore 文件中可以添加那些不需要格式化的文件或文件夹，在美化代码挑 bug 时忽略这些文件。

新建 .eslintignore 文件

```bash
/build/
/.husky/
```

## prettier

-   安装prettier

```bash
npm install --save-dev --save-exact prettier
```

-   新建.prettierrc 文件

```bash
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

-   在 .prettierignore 文件中可以添加那些不需要格式化的文件或文件夹，在美化代码挑 bug 时忽略这些文件。

```bash
/build/
/.husky/
```

> 有时候 vscode 保存时会自动在一些代码末尾补全逗号，末尾逗号，但这在 eslint 严格模式下会导致报错！在 setting.json 中的 prettier 属性中 添加"trailingComma": "none"

```
//.prettierrc
{
  "trailingComma": "none",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

## eslint和prettier混合使用：

```bash
npm install --save-dev eslint-plugin-prettier
npm install --save-dev eslint-config-prettier

```

```js
//.eslintrc.js
extends: [
    'plugin:prettier/recommended'
]
```

除此之外如果使用ts的话，也可以不用eslit,直接tslint+prettier混合使用如下：

## 使用 tslint

> eslint 是检查 JavaScript 的，而 tslint 是检查 typescript 的，当然你也可以在 eslint 配置中增加对 typescript 的支持，用来检查 typescript。主要用于检查代码规范和语法错误
> prettier 是用来检查代码风格的，项目中常屏蔽掉 tslint 中有关代码规范的规则，这部分交由 prettier 校验，tslint 仅仅校验代码功能性错误。

```bash
npm install tslint  --save-dev
npm install tslint-config-standard --save-dev
npm install --save-dev tslint-plugin-prettier prettier
```

tslint.json

```json
{
    "extends": ["tslint-plugin-prettier", "tslint-config-standard"],
    "rules": {
        "prettier": [true, "configs/.prettierrc"]
    }
}
```

## 如果有需要也可以使用[stylelint](https://www.stylelint.com.cn/user-guide/get-started)

(1)安装 Stylelint 和配置文件

```bash
npm install --save-dev stylelint stylelint-config-standard-scss
```

（2）在项目的根目录中创建 .stylelintrc.json 配置文件并写入以下内容：

```json
{
    "extends": "stylelint-config-standard-scss"
}
```

参考文章：
[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
[tslint-plugin-prettier] (https://github.com/prettier/tslint-plugin-prettier)
[tslint-config-standard] (https://www.npmjs.com/package/tslint-config-standard)
[9种前端代码质量工具]（https://blog.csdn.net/weixin_52003205/article/details/133886173）
[Vue 项目中使用 ESLint 和 Prettier](https://zhuanlan.zhihu.com/p/337536349)
[使用 ESLint、Prettier 和 Stylelint 来规范代码](https://juejin.cn/post/7258831031728717881)
