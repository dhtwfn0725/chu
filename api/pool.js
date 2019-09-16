//创建mysql连接池
const mysql = require('mysql');
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chu',
  connectionLimit: 20 ,
  dateStrings:true // 时间数据直接返回 不做转换
});
//把创建好的连接池导出
module.exports = pool;




