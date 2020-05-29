const mysql = require('mysql')

module.exports = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog'
  })

  connection.connect(err => {
    if (err) {
      // 数据库连接失败
      console.log('连接失败')
      throw(err)
    } else {
      // 数据库连接成功
      console.log('连接成功')
      // 判断是否存在 user数据表
      connection.query("show tables", (err, result) => {
        if (err) {
          throw(err)
        } else {
          console.log(result)
        }
      })
    }
  })
}
