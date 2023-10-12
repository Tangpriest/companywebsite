const koa = require('koa')
const koaStatic = require('koa-static')
const path = require('path')
const fs = require('fs')
const https = require('https')

const options = {
  key: fs.readFileSync('./certs/lightexpro.com.key'),
  cert: fs.readFileSync('./certs/lightexpro.com_bundle.pem')
};

const app = new koa()

// 静态资源目录对于相对入口文件server.js的路径
const staticPath = './public'

app.use(koaStatic(
  path.join(__dirname, staticPath)
))

const httpsserver = https.createServer(options,app.callback())

httpsserver.listen(443, () => {
  console.log('Server listening on port 443');
});


