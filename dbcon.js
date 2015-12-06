var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : '52.10.69.111',
  user            : 'student',
  password        : 'default',
  database        : 'student'
});

module.exports.pool = pool;