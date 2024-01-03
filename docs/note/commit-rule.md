# commit 规范

## 规范说明

## 规范工具

:::tip
commitizen : 基于Node.js的 git commit 命令行工具，辅助生成标准化规范化的 commit message。
adapter(适配器) : commitizen 命令行工具的 交互方式 插件。
:::

commitizen 的 adapter(适配器) 主要有以下几种：

-   [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)

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

-   [cz-git](https://cz-git.qbb.sh/zh/config/)
    -   OpenAI 支持, 让 AI 来辅助生成你 git commit 的描述信息。
    -   友好型命令行工具，“懒字优先” ！支持在命令行搜索和选择，减少拼写错误。
    -   轻量级，高度自定义, 但输出格式遵循标准的 Conventional Commits 规范。
    -   更好维护 monorepo 工程化项目 与 commitlint 配合给予命令行的相关校验信息。
    -   支持在 commit 中添加 emoji ｜ 更好的与issue链接，尤其 gitee

根据提交的commit信息是否有表情，以及表情所在的位置，可以分为以下几种：

-   没有表情
-   表情在subject前面的显示
-   表情在type前面显示

### commitizen + cz-conventional-changelog（ Angluar 规范版，无表情）

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

### commitizen + git-cz (符合Angluar 规范，可以实现表情在subject前面的显示)

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

### commitizen + cz-customizable (可以实现表情在type前面显示，表情在type前面显示的时候不符合Angluar 规范)

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

```js
//.cz-config.js

module.exports = {
    types: [
        {
            value: 'feat',
            name: 'feat: 新功能'
        },
        {
            value: 'fix',
            name: 'fix: 修复bug'
        },
        {
            value: 'init',
            name: 'init: 初始化'
        },
        {
            value: ':pencil2: docs',
            name: 'docs: 文档变更'
        },
        {
            value: 'style',
            name: 'style: 代码的样式美化'
        },
        {
            value: 'refactor',
            name: 'refactor: 重构'
        },
        {
            value: 'perf',
            name: 'perf: 性能优化'
        },
        {
            value: 'test',
            name: 'test: 测试'
        },
        {
            value: 'revert',
            name: 'revert: 回退'
        },
        {
            value: 'build',
            name: 'build: 打包'
        },
        {
            value: 'chore',
            name: 'chore: 构建/工程依赖/工具'
        },
        {
            value: 'ci',
            name: 'ci: CI related changes'
        }
    ],
    messages: {
        type: '请选择提交类型(必填)',
        customScope: '请输入文件修改范围(可选)',
        subject: '请简要描述提交(必填)',
        body: '请输入详细描述(可选)',
        breaking: '列出任何BREAKING CHANGES(可选)',
        footer: '请输入要关闭的issue(可选)',
        confirmCommit: '确定提交此说明吗？'
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'], // 当提交类型为feat、fix时才有破坏性修改选项
    subjectLimit: 72
}
```

如果需要在feat之前加表情包：把 types 字段修改为如下

```js{5,6}
//.cz-config.js
module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ feat: 新功能'
    },
    {
      value: ":bug: fix",
      name: '🐛 fix: 修复bug'
    },
    {
      value: ':memo: docs',
      name: '📝 docs: 文档变更'
    },
    {
      value: ':lipstick: style',
      name: '💄 style: 代码的样式美化'
    },
    {
      value: ':recycle: refactor',
      name: '♻️ refactor: 重构'
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf: 性能优化'
    },
    {
      value: ':white_check_mark:  test',
      name: '✅ test: 测试'
    },
    {
      value: ':rewind: revert',
      name: '⏪️ revert: 回退'
    },
    {
      value: ':hammer: chore',
      name: '🔨 chore: 构建/工程依赖/工具'
    },
    {
      value: ':ferris_wheel: ci',
      name: '🎡 ci: CI 改变'
    }
  ],
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'], // 当提交类型为feat、fix时才有破坏性修改选项
  subjectLimit: 72
};

```

在终端运行：

```bash
git cz
# 或 npm run commit
```

效果如下：

::: tip 注意
如果需要在type之前加表情，校验得时候需要更换commitlint-config-conventional （基于 Angular 约定），在type前面加表情不符合Angular规范

:::

图如下所示：

### commitizen + cz-git

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

配置文件.commitlintrc.js

-   符合angular规范无表情

```js
** @type {import('cz-git').UserConfig} */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // @see: https://commitlint.js.org/#/reference-rules
    },
    prompt: {
        alias: { fd: 'docs: fix typos' },
        messages: {
            type: "Select the type of change that you're committing:",
            scope: 'Denote the SCOPE of this change (optional):',
            customScope: 'Denote the SCOPE of this change:',
            subject:
                'Write a SHORT, IMPERATIVE tense description of the change:\n',
            body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
            breaking:
                'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
            footerPrefixesSelect:
                'Select the ISSUES type of changeList by this change (optional):',
            customFooterPrefix: 'Input ISSUES prefix:',
            footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
            generatingByAI: 'Generating your AI commit subject...',
            generatedSelectByAI: 'Select suitable subject by AI generated:',
            confirmCommit:
                'Are you sure you want to proceed with the commit above?'
        },
        types: [
            {
                value: 'feat',
                name: ' feat:   ✨ A new feature',
                emoji: '✨'
            },
            {
                value: 'fix',
                name: 'fix:       🐛  A bug fix',
                emoji: '🐛'
            },
            {
                value: 'docs',
                name: 'docs:   📝 Documentation only changes',
                emoji: '📝'
            },
            {
                value: 'style',
                name: 'style:  💄 Changes that do not affect the meaning of the code',
                emoji: '💄'
            },
            {
                value: 'refactor',
                name: ' refactor:   ♻️  A code change that neither fixes a bug nor adds a feature',
                emoji: '♻️'
            },
            {
                value: 'perf',
                name: 'perf:      ⚡️  A code change that improves performance',
                emoji: '⚡️'
            },
            {
                value: 'test',
                name: 'test:    ✅   Adding missing tests or correcting existing tests',
                emoji: '✅ '
            },
            {
                value: 'build',
                name: ' build:    📦️ Changes that affect the build system or external dependencies',
                emoji: '📦️'
            },
            {
                value: 'ci',
                name: ' ci:  🎡 Changes to our CI configuration files and scripts',
                emoji: '🎡'
            },
            {
                value: 'chore',
                name: " chore:   🔨  Other changes that don't modify src or test files",
                emoji: '🔨 '
            },
            {
                value: 'revert',
                name: ' revert: ⏪️   Reverts a previous commit',
                emoji: '⏪️'
            }
        ],
        useEmoji: false,
        emojiAlign: 'center',
        useAI: false,
        aiNumber: 1,
        themeColorCode: '',
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: 'bottom',
        customScopesAlias: 'custom',
        emptyScopesAlias: 'empty',
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: '|',
        skipQuestions: [],
        issuePrefixes: [
            { value: 'closed', name: 'closed:   ISSUES has been processed' }
        ],
        customIssuePrefixAlign: 'top',
        emptyIssuePrefixAlias: 'skip',
        customIssuePrefixAlias: 'custom',
        allowCustomIssuePrefix: true,
        allowEmptyIssuePrefix: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: '',
        defaultIssues: '',
        defaultScope: '',
        defaultSubject: ''
    }
}
```

-   符合angular规范，表情在subject前面的显示

```js
/** @type {import('cz-git').UserConfig} */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // @see: https://commitlint.js.org/#/reference-rules
    },
    prompt: {
        alias: { fd: 'docs: fix typos' },
        messages: {
            type: "Select the type of change that you're committing:",
            scope: 'Denote the SCOPE of this change (optional):',
            customScope: 'Denote the SCOPE of this change:',
            subject:
                'Write a SHORT, IMPERATIVE tense description of the change:\n',
            body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
            breaking:
                'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
            footerPrefixesSelect:
                'Select the ISSUES type of changeList by this change (optional):',
            customFooterPrefix: 'Input ISSUES prefix:',
            footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
            generatingByAI: 'Generating your AI commit subject...',
            generatedSelectByAI: 'Select suitable subject by AI generated:',
            confirmCommit:
                'Are you sure you want to proceed with the commit above?'
        },
        types: [
            {
                value: 'feat',
                name: ' feat:   ✨ A new feature',
                emoji: '✨'
            },
            {
                value: 'fix',
                name: 'fix:       🐛  A bug fix',
                emoji: '🐛'
            },
            {
                value: 'docs',
                name: 'docs:   📝 Documentation only changes',
                emoji: '📝'
            },
            {
                value: 'style',
                name: 'style:  💄 Changes that do not affect the meaning of the code',
                emoji: '💄'
            },
            {
                value: 'refactor',
                name: ' refactor:   ♻️  A code change that neither fixes a bug nor adds a feature',
                emoji: '♻️'
            },
            {
                value: 'perf',
                name: 'perf:      ⚡️  A code change that improves performance',
                emoji: '⚡️'
            },
            {
                value: 'test',
                name: 'test:    ✅   Adding missing tests or correcting existing tests',
                emoji: '✅ '
            },
            {
                value: 'build',
                name: ' build:    📦️ Changes that affect the build system or external dependencies',
                emoji: '📦️'
            },
            {
                value: 'ci',
                name: ' ci:  🎡 Changes to our CI configuration files and scripts',
                emoji: '🎡'
            },
            {
                value: 'chore',
                name: " chore:   🔨  Other changes that don't modify src or test files",
                emoji: '🔨 '
            },
            {
                value: 'revert',
                name: ' revert: ⏪️   Reverts a previous commit',
                emoji: '⏪️'
            }
        ],
        useEmoji: true,
        emojiAlign: 'center',
        useAI: false,
        aiNumber: 1,
        themeColorCode: '',
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: 'bottom',
        customScopesAlias: 'custom',
        emptyScopesAlias: 'empty',
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: '|',
        skipQuestions: [],
        issuePrefixes: [
            { value: 'closed', name: 'closed:   ISSUES has been processed' }
        ],
        customIssuePrefixAlign: 'top',
        emptyIssuePrefixAlias: 'skip',
        customIssuePrefixAlias: 'custom',
        allowCustomIssuePrefix: true,
        allowEmptyIssuePrefix: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: '',
        defaultIssues: '',
        defaultScope: '',
        defaultSubject: ''
    }
}
```

-   不符合angular规范，表情在type前面显示

```js
/** @type {import('cz-git').UserConfig} */
module.exports = {
    extends: ['gitmoji'],
    rules: {
        // @see: https://commitlint.js.org/#/reference-rules
    },
    prompt: {
        alias: { fd: 'docs: fix typos' },
        messages: {
            type: "Select the type of change that you're committing:",
            scope: 'Denote the SCOPE of this change (optional):',
            customScope: 'Denote the SCOPE of this change:',
            subject:
                'Write a SHORT, IMPERATIVE tense description of the change:\n',
            body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
            breaking:
                'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
            footerPrefixesSelect:
                'Select the ISSUES type of changeList by this change (optional):',
            customFooterPrefix: 'Input ISSUES prefix:',
            footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
            generatingByAI: 'Generating your AI commit subject...',
            generatedSelectByAI: 'Select suitable subject by AI generated:',
            confirmCommit:
                'Are you sure you want to proceed with the commit above?'
        },
        types: [
            {
                value: ':sparkles: feat',
                name: ' ✨ feat:     A new feature',
                emoji: '✨'
            },
            {
                value: ':bug: fix',
                name: '🐛 fix:        A bug fix',
                emoji: '🐛'
            },
            {
                value: ':memo: docs',
                name: '📝  docs:     Documentation only changes',
                emoji: '📝'
            },
            {
                value: ':lipstick: style',
                name: '💄  style:    Changes that do not affect the meaning of the code',
                emoji: '💄'
            },
            {
                value: ':recycle: refactor',
                name: '♻️  refactor:   A code change that neither fixes a bug nor adds a feature',
                emoji: '♻️'
            },
            {
                value: ':zap: perf',
                name: '⚡️ perf:       A code change that improves performance',
                emoji: '⚡️'
            },
            {
                value: ':white_check_mark: test',
                name: '✅  test:     Adding missing tests or correcting existing tests',
                emoji: '✅ '
            },
            {
                value: ':package: build',
                name: ' 📦️  build:    Changes that affect the build system or external dependencies',
                emoji: '📦️'
            },
            {
                value: ':ferris_wheel: ci',
                name: ' 🎡  ci:   Changes to our CI configuration files and scripts',
                emoji: '🎡'
            },
            {
                value: ':hammer: chore',
                name: "  🔨  chore:   Other changes that don't modify src or test files",
                emoji: '🔨 '
            },
            {
                value: ':rewind: revert',
                name: ' ⏪️ revert:   Reverts a previous commit',
                emoji: '⏪️'
            }
        ],
        useEmoji: false,
        emojiAlign: 'center',
        useAI: false,
        aiNumber: 1,
        themeColorCode: '',
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: 'bottom',
        customScopesAlias: 'custom',
        emptyScopesAlias: 'empty',
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: '|',
        skipQuestions: [],
        issuePrefixes: [
            { value: 'closed', name: 'closed:   ISSUES has been processed' }
        ],
        customIssuePrefixAlign: 'top',
        emptyIssuePrefixAlias: 'skip',
        customIssuePrefixAlias: 'custom',
        allowCustomIssuePrefix: true,
        allowEmptyIssuePrefix: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: '',
        defaultIssues: '',
        defaultScope: '',
        defaultSubject: ''
    }
}
```

在终端运行：

```bash
npm run commit
```

发现这三种情况，cz-git 都可以实现，如果用其他适配器只能实现其中一个。

## 校验规范

[husky](https://typicode.github.io/husky/getting-started.html) + [commitlint](https://commitlint.js.org/#/guides-local-setup),他们可以在你commit的时候校验你的commit信息是否是规范的，如果不是就提交不了。

### 校验commit信息

先安装commitlint

```bash
npm install -D @commitlint/cli

npm install  -D  @commitlint/config-conventional 或  npm install  -D  commitlint-config-gitmoji

```

:::tip
[@commitlint/cli](https://commitlint.js.org/#/guides-local-setup): git commit 时对于 commit message 进行规范检查的工具，保证团队的一致性。

@commitlint/config-conventional:强制执行angular规范可共享配置（基于angular规范）。

如果是 emoji 开头的commit规范信息（在type之前加表情）commitlint 并没有内置合适的共享配置，@commitlint/config-conventional不再适用，在网上找到了一个大佬写的commitlint-config-gitmoji 用着还不错

[husky](https://typicode.github.io/husky/getting-started.html): 顾名思义，这个工具是用来在git钩子里运行命令有问题咬住你过不去钩子的。一般用来执行eslint、run test、commitlint 相关命令的。
:::

新建一个 .commitlintrc.js 或 commitlint.config.js(如果用的cz-git，前面已经建过了，这里只需要补充一下就行)，commitlint 会找到这个文件，按文件中指定的 extends 去校验 commit 信息

-   符合angluar版的：

```js
//.commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
   extends: ['@commitlint/config-conventional'],
    ...
}
```

-   不符合angluar版： （emoji 开头的commit规范信息）

```js
//.commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
    extends: ['gitmoji'],
    ...
}

```

commitlint都设置好了，下面我们要实现提交时强制校验（使用husky强制校验commit信息）

安装[husky](https://typicode.github.io/husky/getting-started.html)

```bash
npm install husky -D

# 执行以下命令，会在项目根目录下生成一个.kusky文件夹。(husky>=5.0）
npx husky install

# 执行以下命令，package.json会自动多一行命令
npm pkg set scripts.prepare="husky install"
```

```json{4}
//  package.json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

:::tip
Yarn 2+ 不支持prepare
:::

在.husky 文件夹内创建 commit-msg 文件,执行如下命令：

```js
 npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

会发现.husky多了一个文件commit-msg

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit $1

```

我们再提交代码的时候会走到commit-msg这个钩子里，执行我们写好的校验commit的命令，当commit信息不符合规范时，commitlint会提示哪里规则不对，husky会拦住当前commit信息提不上了。就实现了强制遵守定义好的commit规范，不能随便提代码了！

图上图上图

### 校验代码规范

虽然咱们编辑器都有eslint插件自动修复代码，但是也可能有的同学没安装，为了以防万一，多人协作写一个项目，为了保证规范统一，就需要在commit前校验代码规范。

接下来在package.json文件里面配置

```json
 "lint": "eslint  校验的目录（如./packages）  --ext .js,.ts,.tsx,.vue,.mjs,.cjs",
```

> 直接在 pre-commit 钩子里执行 npm run lint，这样有个问题，对于大型项目，在每个文件上运行 ESLint 可能会消耗大量的时间。
> 而 lint-staged 就能解决这个问题，它只会校验你修改的那部分文件

[lint-staged](https://github.com/lint-staged/lint-staged) ,它的作用是只在当前提交中对已更改的文件运行 pre-commit hooks。并且还能对代码进行更多的设置。话不多说，上代码。

安装 lint-staged

```bash
npm install -D lint-staged
```

```json
//package.json
  "scripts":{
      "lint:staged": "lint-staged",
       "lint": "eslint 校验的目录（如./packages）  --ext .js,.ts,.tsx,.mjs,.cjs",
  },
  "lint-staged": {
    "*.{md,json,ts,tsx,js,scss}": "prettier --write",
    "*.{ts,tsx,js,jsx}": "eslint --fix"
  }

```

使用 pre-commit 检测提交时代码规范

```js
 npx husky add .husky/pre-commit 'npx lint-staged'
```

生成文件.husky/pre-commit

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install lint-staged
```

## 生成CHANGELOG
