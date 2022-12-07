// File menyimpan handler untuk route
const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
  // Untuk mengecek error saat pemanggilan database
  try {
    const [data] = await UsersModel.getAllUsers();

    res.json({
      message: 'GET all users success',
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error,
    })
  }
}

const createNewUser = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.name || !body.address) {
    return res.status(400).json({
      message: 'Anda mengirimkan data yang salah',
      data: null
    })
  }

  try {
    await UsersModel.createNewUsers(body);
    res.status(201).json({
      message: 'CREATE new user success',
      data: body
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  // console.log('idUser : ', idUser)

  const { body } = req;
  try {
    await UsersModel.updateUsers(body, idUser);
    res.json({
      message: 'UPDATE User Success',
      data: {
        id: idUser,
        ...body
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await UsersModel.deletUsers(idUser);
    res.json({
      message: 'Delele user success',
      data: null
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error,
    })
  }
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
}