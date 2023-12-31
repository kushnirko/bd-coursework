'use strict';

const Permission = require('../models/Permission');

const getAllPermissions = async (req, res) => {
  try {
    const permissions = await Permission.getAll();

    console.log(permissions);

    res.status(200).json({ permissions });
  } catch (err) {
    const message = `cannot get list of permissions (${err.message})`;
    console.log(`${getAllPermissions.name}: ${message}`);
    res.status(500).json({ errorMessage: message });
  }
};

const getPermissionById = async (req, res) => {
  try {
    const permissionId = req.params.id;
    const permission = await Permission.getById(permissionId);
    res.status(200).json({ permission });
  } catch (err) {
    const message = `cannot get permission (${err.message})`;
    console.log(`${getPermissionById.name}: ${message}`);
    res.status(404).json({ errorMessage: message });
  }
};

module.exports = { getAllPermissions, getPermissionById };
