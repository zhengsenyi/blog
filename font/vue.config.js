const path = require('path')

module.exports = {

  // 打包部署的路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  // 项目打包目录
  outputDir: 'dist',

  // 放置静态资源的目录
  assetsDir: '',

  // html 的输出路径
  indexPath: 'index.html',

  // 文件名哈希
  filenameHashing: true,

  // 多页面配置
  pages: {
    index: {
      // 入口文件
      entry: 'src/main.js',
      // 模板文件
      template: 'public/index.html',
      // 在 dist/index.html 的输出文件
      filename: 'index.html',
      // 页面 title
      title: 'Index Page',
      // 这个页面中包含的块
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    subpage: 'src/main.js'
  },

  // 保存时是否进行 eslint-loader检查
  lintOnSave: false,

  // 是否使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,
  
  // Babel 显式转译列表
  transpileDependencies: [],

  // 是否需要生产环境的 source map
  productionSourceMap: false,

  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件
    extract: false,
    // 是否开启 CSS source map？
    sourceMap: false,
    // loader 传递自定义选项
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    // 为所有的 CSS 及预处理文件开启CSS Modules
    requireModuleExtension: false
  },

  // 配置 webpack-dev-server 行为
  devServer: {
    open: false,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: true,
    // 代理配置
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },

  // 配置路径别名
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': path.resolve(__dirname, './src'),
  //       'com': path.resolve(__dirname, './src/components')
  //     }
  //   }
  // }
}
