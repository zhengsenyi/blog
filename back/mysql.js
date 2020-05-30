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
      // 定义数组包含所需要的数据表
      const tables = ['user','text']
      // 判断是否存在 user数据表
      connection.query('show tables', (err, result) => {
        if (err) {
          throw(err)
        } else {
          // 创建 user数据表
          const createUserTable = `create table user 
          (
            id int(10) auto_increment primary key,
            username varchar(12) not null,
            password varchar(20) not null,
            phone varchar(20) not null,
            nickname varchar(6),
            avatar varchar(255),
            permission int(10) not null,
            time datetime
          )`

          if (result.length === 0) {
            connection.query(createUserTable, (err, result) => {
                if (err) {
                  throw(err)
                }
              }
            )
          } else {
            // 判断哪些数据表没有创建
            tables.forEach(item => {
              result.forEach(table => {
                if (item !== table.Tables_in_blog) {
                  // 创建所没有的数据表
                  console.log('no'+item)
                }
              })
            })
          }
        }
      })
    }
  })
}
