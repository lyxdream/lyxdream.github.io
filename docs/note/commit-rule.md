# commit 规范

## 规范说明

## 规范工具

:::tip
commitizen : 基于Node.js的 git commit 命令行工具，辅助生成标准化规范化的 commit message。
adapter(适配器) : commitizen 命令行工具的 交互方式 插件。
:::

commitizen 的 adapter(适配器) 主要有以下几种：

-   cz-conventional-changelog

    -   支持的自定义配置项少。
    -   交互方式不友好。
    -   重复性输入的东西太多。

-   cz-customizable
    -   需要额外添加配置文件。
    -   仅支持上下选择式的交互方式。
    -   可支持的习惯型配置项少。
-   git-cz

    -   可支持的自定义配置项少。
    -   需要额外添加配置文件。

-   cz-git
    -   OpenAI 支持, 让 AI 来辅助生成你 git commit 的描述信息。
    -   友好型命令行工具，“懒字优先” ！支持在命令行搜索和选择，减少拼写错误。
    -   轻量级，高度自定义, 但输出格式遵循标准的 Conventional Commits 规范。
    -   更好维护 monorepo 工程化项目 与 commitlint 配合给予命令行的相关校验信息。
    -   支持在 commit 中添加 emoji ｜ 更好的与issue链接，尤其 gitee

根据提交的commit信息是否有表情，以及表情所在的位置，可以分为以下几种：

-   没有表情
-   表情在subject前面的显示
-   表情在type前面显示

-   commitizen + cz-conventional-changelog（ Angluar 规范版，无表情）

```bash
 npm install commitizen  cz-conventional-changelog  -D
```

配置如下：

```json
//package.json
{
    ....
  "scripts": {
    "commit": "cz"
  },
  "devDependencies": {
    "commitizen": "^4.3.0",
    "cz-conventional-changelog": "^3.3.0"
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}
```

在终端运行：

```bash
npm run commit
```

效果如下：

```

```

-   commitizen + git-cz (符合Angluar 规范，可以实现表情在subject前面的显示)

```bash
npm install -D commitizen git-cz
```

git-cz 工具它也是提供自定义配置的，但是配置项有限。在根目录添加 changelog.config.js

```js

```

-   commitizen + cz-customizable (可以实现表情在type前面显示，表情在type前面显示的时候不符合Angluar 规范)

-   commitizen + cz-git

```bash
npm install -D commitizen cz-git
```

配置如下：

```json
//package.json
{
    "scripts": {
        "commit": "git-cz"
    },
    "devDependencies": {
        "commitizen": "^4.3.0",
        "cz-git": "^1.8.0"
    },
    "config": {
        "commitizen": {
            "path": "node_modules/cz-git"
        }
    }
}
```

在终端运行：

```bash
npm run commit
```

发现这三种情况，cz-git 都可以实现，如果用其他适配器只能实现其中一个。

## 校验规范

husky + commitlint,他们可以在你commit的时候校验你的commit信息是否是规范的，如果不是就提交不了。

:::tip
commitlint : git commit 时对于 commit message 进行规范检查的工具，保证团队的一致性。

husky: 顾名思义，这个工具是用来在git钩子里运行命令有问题咬住你过不去钩子的。一般用来执行eslint、run test、commitlint 相关命令的。
:::

## 生成CHANGELOG
