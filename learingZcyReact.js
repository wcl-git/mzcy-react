  // server.js 学习
  const config = require('../config')
  const webpackConfig = process.env.BROWSER !== 'ie8' ? require('./webpack.dev.conf') : require('./webpack.dev.ie8.conf')
  const path = require('path') //  引入node path模块
  const webpack = require('webpack') // 引入 webpack
  const express = require('express') // 引入 node express 模块
  const opn = require('opn') // 引入 opn ，作用。更好的node 打开。打开网站，文件，可执行等内容，解决大部分node-open 问题
  const debug = require('debug')('app:server') // 一个小巧的js调试工具，以nodejs 核心的调试技术基础，
  const bodyParser = require('body-parser') // node.js  中间件，作用：在你处理程序前 ，在中间件中解析传入的请求体,在req.body属性下可用

  debug('设置server启动配置')   // 标注一下，方便看
  const port = process.env.PORT || config.dev.port // process.env  属性返回一个包含用户环境信息的对象
  const autoOpenBrowser = !!config.dev.autoOpenBrower  // 是否自动打开浏览器
 // 下面是express
  const app = express()
  app.use(bodyParser.urlencoded({extended: false}))
  // 这里解释： 只解析URL 编码主体，即：只查看Content-Type 标题与type选项匹配的请求。
  // extended 设置为false 表示 字符串或数组，true 表示任何类型

  // 编译webpack配置
  let compiler = webpack(webpackConfig) // 这里就是webpack配置项

  // 编译webpack-dev-middleware

  let devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
      chunks: false,
      chunkModules: false,
      colors: true
    }
  })

  //  hot热拔插件
  let hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
  })
   // 添加自动刷新钩子
  compiler.plugin('compilation', (compilation) => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
      hotMiddleware.publish({acttion: 'reload'})
      cb()
    })
  })

  // 设置静态文件托管目录
  let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetesSubDirectory) // node path 模块
  app.use(staticPath, express.static('public'))

  //  设置代理信息
  require('./dev-proxy')(app) // 里面的node模块

  // history-fallback 中间件
  app.use(require('connect-history-api-fallback')()) // 通过指定的索引页面代理请求，对于使用HTML5历史记录API的单页面应用很有用

  // 添加webpack-dev-middleware中间件
  app.use(devMiddleware)
  // 添加webpack-hot-middleware中间件
  if (process.env.BROWSER !== 'ie8') {
    app.use(hotMiddleware)
  }

  let uri = 'http://localhost:' + port

  // Starting server
  // webpack-dev-middleware中间件回调
  devMiddleware.waitUntilValid(() => {
    autoOpenBrowser && (process.env.NODE_ENV !== 'testing') && opn(uri)
  })

  // 监听端口

  let server = app.listen(port)

