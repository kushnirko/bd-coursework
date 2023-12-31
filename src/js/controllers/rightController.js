'use strict';

const Right = require('../models/Right');

const getAllRights = async (req, res) => {
  try {
    const rights = await Right.getAll();
    res.status(200).json({ rights });
  } catch (err) {
    const name = getAllRights.name;
    const message = `cannot get list of rights (${err.message})`;
    console.log(`${name}: ${message}`);
    res.status(500).json({ errorMessage: message });
  }
};

const getRightById = async (req, res) => {
  try {
    const rightId = req.params.id;
    const right = await Right.getById(rightId);
    res.status(200).json({ right });
  } catch (err) {
    const name = getRightById.name;
    const message = `cannot get right (${err.message})`;
    console.log(`${name}: ${message}`);
    res.status(404).json({ errorMessage: message });
  }
};

module.exports = { getAllRights, getRightById };
