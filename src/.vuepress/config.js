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
  theme: '@vuepress/blog',
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
        text: '記事', link: '/articles/'
      },
      {
        text: 'その他', link: '/others/'
      },
    ]
  },
  markdown: {
    toc: { includeLevel: [2] },
    anchor: {
      permalinkSymbol: '#'
    },
    linkify: true
  },
  plugins: [
    [
      "sitemap", {
            hostname: "https://guinpen98.github.io/VuePress/",
            exclude: "https://guinpen98.github.io/VuePress/404.html"
      }
    ],
    ['@vuepress/blog'],
    ['@vuepress/last-updated'],
    [
      '@vuepress/google-analytics',
      {
        ga: 'G-YMZESLTY06', // 自身のトラッキングIDを設定
      },
    ]
  ],
}