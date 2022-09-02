module.exports = {
  locales: {
    '/': {
      lang: 'ja',
      title: 'Portfolio',
      description: 'VuePress',
    }
  },
  dest: 'docs/',
  base: '/VuePress/',
  themeConfig: {
    sidebar: 'auto',
    sidebarDepth: 2,
    nav: [
      {
        text: 'ホーム', link: '/'
      },
      {
        text: '作品詳細', link: '/works/'
      },
      {
        text: 'その他', link: '/others/'
      },
    ]
  },
  markdown: {
    toc: { includeLevel: [1, 2] }
  }
}