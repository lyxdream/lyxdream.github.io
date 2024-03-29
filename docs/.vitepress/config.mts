import { defineConfig } from 'vitepress'
import { sidebar, nav, head } from './configs'
export default defineConfig({
  title: "前端成长指引",
  description: "前端知识点不定时更新中...",
  head,
  lang: 'zh-CN',
  lastUpdated: true,  //最近更新时间
  cleanUrls: true, //VitePress 将从 URL 中删除尾随.html
  base: '/',
    /* markdown 配置 */
    markdown: {
      lineNumbers: true
    },
  themeConfig: {
    logo: '/logo.png', //显示在导航栏中网站标题之前的徽标文件。接受路径字符串或对象来为亮/暗模式设置不同的徽标。
    sidebar,
    nav,
    socialLinks: [//显示带有图标的社交帐户链接
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 本地搜索
    search: {
      provider: 'local'
    },
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present yx'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    darkModeSwitchLabel: '模式', //在移动端生效
    lastUpdatedText: '上次更新'

  },
  ignoreDeadLinks: true //忽略死链接解决构建报错
})
