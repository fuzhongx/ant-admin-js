const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:process.env.NODE_NEV==='production' ? '': './',
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
  },
  devServer: {
    open:false,
    host:"0.0.0.0",//外部访问
    port:8000,
    proxy: {
      [process.env.VUE_APP_FLAG]: {
        target:process.env.VUE_APP_APIURL, // 目标API地址
        ws:false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务器，然后发送请求的数据，会同时会收到请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          [`^${process.env.VUE_APP_FLAG}`]: '' // 路径重写，移除路径中的/api
        }
      }
    }
  }

});
