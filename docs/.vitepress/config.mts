import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fuwari-FENG",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于主题', link: '/about' },
      { text: '在线演示', link: 'https://blog.feng1026.top/' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: '特色功能',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: '关于',
        items: [
          { text: '关于主题', link: '/about' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
