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

-   [cz-customizable](https://github.com/leoforfree/cz-customizable/tree/master)

    -   需要额外添加配置文件。
    -   仅支持上下选择式的交互方式。
    -   可支持的习惯型配置项少。

-   [git-cz](https://github.com/streamich/git-cz)

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

安装依赖

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

-   commitizen + git-cz (符合Angluar 规范，可以实现表情在subject前面的显示)

```bash
npm install -D commitizen git-cz
```

```json
//package.json
{
    ....
  "scripts": {
    "commit": "git-cz"
  },
  "devDependencies": {
    "commitizen": "^4.3.0",
     "git-cz": "^4.9.0"
  },
  "config": {
    "commitizen": {
       "path": "git-cz"
    }
  }
}
```

git-cz 工具它也是提供自定义配置的，但是配置项有限。在根目录添加 changelog.config.js

```js
//changelog.config.js
module.exports = {
    disableEmoji: false,
    format: '{type}{scope}: {emoji}{subject}',
    list: [
        'test',
        'feat',
        'fix',
        'chore',
        'docs',
        'refactor',
        'style',
        'ci',
        'perf'
    ],
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: [
        'type',
        'scope',
        'subject',
        'body',
        'breaking',
        'issues',
        'lerna'
    ],
    scopes: [],
    types: {
        chore: {
            description: 'Build process or auxiliary tool changes',
            emoji: '🤖',
            value: 'chore'
        },
        ci: {
            description: 'CI related changes',
            emoji: '🎡',
            value: 'ci'
        },
        docs: {
            description: 'Documentation only changes',
            emoji: '✏️',
            value: 'docs'
        },
        feat: {
            description: 'A new feature',
            emoji: '🎸',
            value: 'feat'
        },
        fix: {
            description: 'A bug fix',
            emoji: '🐛',
            value: 'fix'
        },
        perf: {
            description: 'A code change that improves performance',
            emoji: '⚡️',
            value: 'perf'
        },
        refactor: {
            description:
                'A code change that neither fixes a bug or adds a feature',
            emoji: '💡',
            value: 'refactor'
        },
        release: {
            description: 'Create a release commit',
            emoji: '🏹',
            value: 'release'
        },
        style: {
            description:
                'Markup, white-space, formatting, missing semi-colons...',
            emoji: '💄',
            value: 'style'
        },
        test: {
            description: 'Adding missing tests',
            emoji: '💍',
            value: 'test'
        },
        messages: {
            type: "Select the type of change that you're committing:",
            customScope: 'Select the scope this component affects:',
            subject:
                'Write a short, imperative mood description of the change:\n',
            body: 'Provide a longer description of the change:\n ',
            breaking: 'List any breaking changes:\n',
            footer: 'Issues this commit closes, e.g #123:',
            confirmCommit: 'The packages that this commit has affected\n'
        }
    }
}
```

在终端运行：

```bash
npm run commit
```

效果如下：

-   commitizen + cz-customizable (可以实现表情在type前面显示，表情在type前面显示的时候不符合Angluar 规范)

安装依赖

```bash
 npm install commitizen  cz-customizable  -D
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
        "cz-customizable": "^7.0.0"
    },
    "config": {
        "commitizen": {
            "path": "node_modules/cz-customizable"
        }
    }
}
```

需要额外添加配置文件,在项目根目录下新建 .cz-config.js 配置文件，在该文件中对上述字段设置规则。官方github上有给出该文件写法的一个示例。 官方提供了一个[.cz-config.js](https://github.com/leoforfree/cz-customizable/blob/master/.cz-config.js)示例文件[cz-config-EXAMPLE.js](https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js)，

在终端运行：

```bash
npm run commit
```

效果如下：

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
