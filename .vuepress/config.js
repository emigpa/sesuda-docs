module.exports = {
  title: 'Sesuda docs',
  port: '9001',
  base: '/sesuda-docs/',
  dest: 'docs',
  themeConfig: {
    sidebar: [
      '/',
      ['/funcs', 'funcs'],
      ['/api', 'api'],
      ['/gib', 'gib'],
      ['/estructura', 'estructura'],
      ['/pouch', 'pouch']
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/emigpa' }
    ]
  },
  markdown: {
    toc: { includeLevel: [1, 2] }
  }
}
