import {defineConfig} from 'vitepress'

import {head, nav, sidebar} from './configs'

export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/',

  lang: 'zh-CN',
  title: 'Austin',
  description: '',
  head,

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },

    socialLinks: [{icon: 'github', link: 'https://github.com/AustinFairyland'}],

    footer: {
      message: 'Copyright © 2023 - Person Austin 版权所有',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2022008414号</a>',
      // copyright: 'Copyright © 2023 - Person Austin <a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2022008414号</a>',
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
})
