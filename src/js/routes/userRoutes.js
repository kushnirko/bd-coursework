'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const router = new express.Router();

router.get('/', userController.getAllUsers);

router
  .route('/:id')
  .get(userController.getUserById)
  .delete(userController.deleteUser);

router.get('/:id/full', userController.getUserFullInfoById);

router.patch('/:id/role', userController.changeUserRole);

module.exports = router;
