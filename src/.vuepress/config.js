module.exports = {
    configureWebpack: (config) => {
      // 1) で確認したい場合
      // config.output.publicPath = './.vuepress/dist/'
      
      // 2) ローカルの環境で確認したい場合
      const path = require('path')
      config.output.publicPath = path.resolve(__dirname, 'dist')
    }
  }