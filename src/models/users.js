// Menyimpan query mysql tabel users
const dbPool = require('../config/database')

const getAllUsers = () => {
  // execute sql query
  const SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery);
}

const createNewUsers = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, address) 
                    VALUES ('${body.name}', '${body.email}', '${body.address}')`

  return dbPool.execute(SQLQuery)
}

const updateUsers = (body, idUser) => {
  const SQLQuery = `UPDATE users 
                    SET name='${body.name}', email='${body.email}', address='${body.address}' 
                    WHERE id=${idUser}`
  return dbPool.execute(SQLQuery)
}

const deletUsers = (idUser) => {
  const SQLQuery = `DELETE FROM users WHERE id=${idUser}`;

  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deletUsers,
}