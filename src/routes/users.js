const express = require('express');
const router = express.Router();

const UserController = require('../controller/users.js')

// Create - POST
router.post('/', UserController.createNewUser)

// Read - GET
router.get('/', UserController.getAllUsers)

// Update - PATCH
router.patch('/:idUser', UserController.updateUser)

// Delete - DELETE
router.delete('/:idUser', UserController.deleteUser)

module.exports = router;