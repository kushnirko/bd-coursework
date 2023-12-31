'use strict';

const express = require('express');
const rightController = require('../controllers/rightController');
const router = new express.Router();

router.get('/', rightController.getAllRights);
router.get('/:id', rightController.getRightById);

module.exports = router;
