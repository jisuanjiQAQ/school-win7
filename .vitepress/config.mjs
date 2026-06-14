import { defineConfig } from 'vitepress' 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'win7-school',
  description: 'Laibin Vocational Education Center',

  vite: {
    // 1. 保留默认的 public  2. 再追加同级目录 img
    publicDir: ['public', 'img']
  },

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
          { text: 'c++', link: '/docs/cxx' },
          { text: '游戏下载', link: '/docs/games' },
          { text: '输入法', link: '/docs/shurufa' },
          { text: '聊天工具', link: '/docs/liaotian' },
          { text: 'office2016激活密钥', link: '/docs/office2016puls' },
          { text: 'pcl1', link: '/docs/pcl1' },
          { text: 'idm', link: '/docs/idm' },
          { text: '网络', link: '/docs/wangluo' },
          { text: '浏览器', link: '/docs/llq' },
          { text: '壁纸', link: '/docs/bizhi' }
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