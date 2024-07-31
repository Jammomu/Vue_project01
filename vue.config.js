// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


// 빌드 할 때 dist를 docs로 바꿔줌
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/VUE_PROJECT/" : "/",
  outputDir: "docs",
};