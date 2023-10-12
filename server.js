const koa = require('koa')
const koaStatic = require('koa-static')
const path = require('path')

const app = new koa()

// 静态资源目录对于相对入口文件server.js的路径
const staticPath = './public'

app.use(koaStatic(
  path.join(__dirname, staticPath)
))

app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})