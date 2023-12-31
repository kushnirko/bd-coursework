'use strict';

const express = require('express');
const permissionController = require('../controllers/permissionController');
const router = new express.Router();

router.get('/', permissionController.getAllPermissions);
router.get('/:id', permissionController.getPermissionById);

module.exports = router;
