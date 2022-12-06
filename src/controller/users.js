const getAllUsers = (req, res) => {
  const data = {
    id: '1',
    name: 'Dimas Nuryadin',
    email: 'dimasnuryadinn@gmail.com',
    address: 'Bandung'
  }
  res.json({
    message: 'GET all users success',
    data: data,
  })
}

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'CREATE new user success',
    data: req.body
  })
}

const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log('idUser : ', idUser)
  res.json({
    message: 'Update User Success',
    data: req.body,
  })
}

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: 'Delele user success',
    data: {
      id: idUser,
      name: 'Dimas Nuryadin',
      email: 'dimasnuryadinn@gmail.com',
      address: 'Bandung'
    }
  })
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
}