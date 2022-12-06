// Menyimpan query mysql tabel users
const dbPool = require('../config/database')

const getAllUsers = () => {
  // execute sql query
  const SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllUsers,
}