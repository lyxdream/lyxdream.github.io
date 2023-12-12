// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
    // extends: ['@commitlint/config-conventional'],
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
                name: 'refactor: ♻️   A code change that neither fixes a bug nor adds a feature',
                emoji: '♻️'
            },
            {
                value: ':zap: perf',
                name: 'perf:     ⚡️  A code change that improves performance',
                emoji: '⚡️'
            },
            {
                value: ':white_check_mark: test',
                name: 'test:     ✅  Adding missing tests or correcting existing tests',
                emoji: '✅ '
            },
            {
                value: ':package: build',
                name: 'build:    📦️   Changes that affect the build system or external dependencies',
                emoji: '📦️'
            },
            {
                value: ':ferris_wheel: ci',
                name: 'ci:       🎡  Changes to our CI configuration files and scripts',
                emoji: '🎡'
            },
            {
                value: ':hammer: chore',
                name: "chore:    🔨  Other changes that don't modify src or test files",
                emoji: '🔨 '
            },
            {
                value: ':rewind: revert',
                name: 'revert:   ⏪️  Reverts a previous commit',
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
