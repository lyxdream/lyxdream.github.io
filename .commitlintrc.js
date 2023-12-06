// .commitlintrc.js
// /** @type {import('cz-git').UserConfig} */
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
                name: 'feat:     ✨ 新增功能 | A new feature',
                emoji: ':sparkles:'
            },
            {
                value: 'fix',
                name: 'fix:      🐛  修复缺陷 | A bug fix',
                emoji: ':bug:'
            },
            {
                value: 'docs',
                name: 'docs:     📝  文档更新 | Documentation only changes',
                emoji: ':memo:'
            },
            {
                value: 'style',
                name: 'style:    💄  代码格式 | Changes that do not affect the meaning of the code',
                emoji: ':lipstick:'
            },
            {
                value: 'refactor',
                name: 'refactor: ♻️   refactor: 代码重构 | A code change that neither fixes a bug nor adds a feature',
                emoji: ':recycle:'
            },
            {
                value: 'perf',
                name: 'perf:     ⚡️  性能提升 | A code change that improves performance',
                emoji: ':zap:'
            },
            {
                value: 'test',
                name: 'test:     ✅  测试相关 | Adding missing tests or correcting existing tests',
                emoji: ':white_check_mark:'
            },
            {
                value: 'build',
                name: 'build:    📦️   构建相关 | Changes that affect the build system or external dependencies',
                emoji: ':package:'
            },
            {
                value: 'ci',
                name: 'ci:       🎡  持续集成 | Changes to our CI configuration files and scripts',
                emoji: ':ferris_wheel:'
            },
            {
                value: 'chore',
                name: 'chore:    🔨  其他修改 | Other changes that do not modify src or test files',
                emoji: ':hammer:'
            },
            {
                value: 'revert',
                name: 'revert:   ⏪️  回退代码 | Revert to a commit',
                emoji: ':rewind:'
            }
        ],
        useEmoji: true
    }
}
