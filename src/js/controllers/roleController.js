'use strict';

const Role = require('../models/Role');

const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.getAll();
    res.status(200).json({ roles });
  } catch (err) {
    const message = `cannot get list of roles (${err.message})`;
    console.log(`${getAllRoles.name}: ${message}`);
    res.status(500).json({ errorMessage: message });
  }
};

const getRoleById = async (req, res) => {
  try {
    const roleId = req.params.id;
    const role = await Role.getById(roleId);
    res.status(200).json({ role });
  } catch (err) {
    const message = `cannot get role (${err.message})`;
    console.log(`${getRoleById.name}: ${message}`);
    res.status(404).json({ errorMessage: message });
  }
};

module.exports = { getAllRoles, getRoleById };
