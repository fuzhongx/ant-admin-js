const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:process.env.NODE_NEV==='production' ? '': '/',
  outputDir:process.env.NODE_NEV==='production' ? 'dist': 'devDist',//打包称那个文件夹
  transpileDependencies: true,
  lintOnSave:false
});
