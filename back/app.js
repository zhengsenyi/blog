const express = require('express')
const app = express()
const router = require('./router')
const mysql = require('./mysql')

// 端口号
const port = 3000

app.use(router)

// 连接数据库
mysql()

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})