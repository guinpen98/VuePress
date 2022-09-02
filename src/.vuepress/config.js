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
    nav: [
      {
        text: 'ホーム', link: '/'
      },
      {
        text: 'その他', link: '/others/'
      }
    ]
  },
}