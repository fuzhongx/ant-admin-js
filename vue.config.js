const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:process.env.NODE_NEV==='production' ? '': '/',
  outputDir:process.env.NODE_NEV==='production' ? 'dist': 'devDist',//打包称那个文件夹
  transpileDependencies: true,
  lintOnSave:false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/styles/main.scss";`
      }
    }
  },
  chainWebpack(config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }


});
