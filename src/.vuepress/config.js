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
  head: [
      ['link', { rel: 'icon', href: '/imgs/favicon.ico' }],
      ['meta', { name: 'google-site-verification', content: 'Rr04P_zo0dof8iLtrJOAPYgC-60eqppExk85NQCmxxI' }],
    ],
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
    toc: { includeLevel: [2] }
  },
  plugins: [
    [
      "sitemap", {
            hostname: "https://guinpen98.github.io/VuePress/",
            exclude: "https://guinpen98.github.io/VuePress/404.html"
      }
    ]
  ],
}