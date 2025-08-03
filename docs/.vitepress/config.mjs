import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "新手友善的 Vitepress 模板 🐥",
  description: "👶👶 提供新手快速建立的 Vitepress 模板 👶👶",
  base: "/black-s-bloggg/", // 👈👈👈 這個非常需要設定喔！！
  themeConfig: {
    
    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-nav
    nav: [ 
      { text: 'Home', link: '/' },
      { text: 'blog', link: '/blog/post1.html' }
    ],

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-sidebar
    sidebar: [
      {
        text: 'blog',
        items: [
          { text: 'TQC+', link: '/blog/post1' },
          { text: 'ctfcdx', link: '/blog/post2' },
          { text: 'something about Network', link: '/blog/post3' },
        ]
      }
    ],

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aisp-fhsh/vitepress-templating' },
      { icon: { svg: "<img src='New%20AISP%20Logo%20Icon.svg' alt='AISP Logo' width='80%' height='80%' />" }, link: 'https://security-program.fhsh.taipei'}
    ]
  }
})
