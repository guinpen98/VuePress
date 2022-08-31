module.exports = {
  title: 'GitHub Pages product by VuePress',
  description: 'VuePress',
  base: 'src/.vuepress/dist',
  configureWebpack: (config) => {
    // 1) xserver で確認したい場合
    config.output.publicPath = 'VuePress が出力したファイルを配置するディレクトリへのパス'
    
    // 2) ローカルの環境で確認したい場合
    const path = require('path')
    config.output.publicPath = path.resolve(__dirname, 'dist')
  }
}