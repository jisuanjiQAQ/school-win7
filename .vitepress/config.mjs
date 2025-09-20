import { defineConfig } from 'vitepress' 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'win7-school',
  description: 'Laibin Vocational Education Center',

  themeConfig: {
    // 顶部导航
    nav: [
      { text: 'Home', link: '/' },
      { text: '去博客', link: 'https://blog.computerqwq.top/' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '归档',
        items: [
          { text: '解除限制', link: '/docs/xianzhi' },
          { text: 'c++', link: '/docs/cxx' }
        ]
      }
    ],

    // 脚页（新增）
    footer: {
      message: '计算机qwq搭建',
      copyright: 'Copyright © 2025-present win7-school'
    },

    // 社交图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})