module.exports = {
  base: '/docs/',
  title: 'Blog by wbk',
  description: 'Just playing around',
  head: [
    ['link',{rel: 'icon', href: '/favicon.ico'}],
    ['meta',{name: 'keywords', content: 'wbk,wbk的博客,vuepress'}]
  ],
  themeConfig: {
    logo: './logo.jpg',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '主页', link: '/'},
      { text: '文章', link: '/article/' },
      { text: '笔记', link: '/note/'},
      { text: 'vue官网', link: 'https://cn.vuejs.org/' },
    ],
    sidebar: {
      "/article/": [{
        title: 'vue',
        children: ["first","second","third","fouth"]
      }],
      "/note/": [{
        title: '一些感触',
        children: [""]
      }]
    }
  },
  markdown: {
    lineNumbers: true
  }
}