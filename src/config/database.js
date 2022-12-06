const mysql = require('mysql2');
const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'express_mysql',
  password: '',
});

// Karena bersifat asyncronous cara exportnya pake promise()
module.exports = dbPool.promise();