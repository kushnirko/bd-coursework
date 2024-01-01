'use strict';

const crypto = require('crypto');
const User = require('../models/User');
const Session = require('../session');

const handleCredentials = async (nickname, password) => {
  const user = await User.getByNickname(nickname);
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  if (user.length === 0 || user.password !== hash) {
    const err = new Error('Invalid credentials');
    err.statusCode = 401;
    throw err;
  }
  return user;
};

const getAllUsers = async (req, res) => {
  try {
    req.client.checkRights(['USER_MODERATING']);
    const users = await User.getAll();
    res.status(200).json({ users });
  } catch (err) {
    const message = `cannot get list of users (${err.message})`;
    console.log(`${getAllUsers.name}: ${message}`);
    res.status(err.statusCode || 500).json({ errorMessage: message });
  }
};

const getUserById = async (req, res) => {
  try {
    req.client.checkRights(['USER_MODERATING']);
    const userId = req.params.id;
    const user = await User.getById(userId);
    res.status(200).json({ user });
  } catch (err) {
    const message = `cannot get user (${err.message})`;
    console.log(`${getUserById.name}: ${message}`);
    res.status(err.statusCode || 404).json({ errorMessage: message });
  }
};

const getUserFullInfoById = async (req, res) => {
  try {
    req.client.checkRights(['USER_MODERATING']);
    const userId = req.params.id;
    const user = await User.getFullInfoById(userId);
    res.status(200).json({ user });
  } catch (err) {
    const message = `cannot get user (${err.message})`;
    console.log(`${getUserFullInfoById.name}: ${message}`);
    res.status(err.statusCode || 404).json({ errorMessage: message });
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const createdUser = await User.create(userData);
    res.status(201).json({ createdUser });
  } catch (err) {
    const message = `cannot create user (${err.message})`;
    console.log(`${createUser.name}: ${message}`);
    res.status(err.statusCode || 400).json({ errorMessage: message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { client } = req;
    client.checkLogin();
    const id = client.user.id;
    const { nickname, firstname, lastname, email, password } = req.body;
    const updatedUser = await User.updateById(id, {
      nickname,
      firstname,
      lastname,
      email,
      password,
    });
    res.status(200).json({ updatedUser });
  } catch (err) {
    const message = `cannot update user profile (${err.message})`;
    console.log(`${updateUserProfile.name}: ${message}`);
    res.status(err.statusCode || 400).json({ errorMessage: message });
  }
};

const changeUserRole = async (req, res) => {
  try {
    req.client.checkRights(['USER_MODERATING']);
    const id = req.params.id;
    const role_id = req.body.id;
    const updatedUser = await User.updateById(id, { role_id });
    res.status(200).json({ updatedUser });
  } catch (err) {
    const message = `cannot update user role (${err.message})`;
    console.log(`${changeUserRole.name}: ${message}`);
    res.status(err.statusCode || 404).json({ errorMessage: message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { client } = req;
    client.checkLogout();
    const { nickname, password } = req.body;
    const user = await handleCredentials(nickname, password);
    Session.start(client);
    client.session.set('userId', user.id);
    client.session.save();
    client.sendCookie();
    const message = `Now you are logged in as ${user.nickname}`;
    res.status(200).json({ message });
  } catch (err) {
    const message = `cannot login user (${err.message})`;
    console.log(`${loginUser.name}: ${message}`);
    res.status(err.statusCode || 400).json({ errorMessage: message });
  }
};

const logoutUser = async (req, res) => {
  try {
    const { client } = req;
    client.checkLogin();
    Session.delete(client);
    client.sendCookie();
    const message = 'Now you are logged out';
    res.status(200).json({ message });
  } catch (err) {
    const message = `cannot logout user (${err.message})`;
    console.log(`${logoutUser.name}: ${message}`);
    res.status(err.statusCode || 400).json({ errorMessage: message });
  }
};

const deleteUser = async (req, res) => {
  try {
    req.client.checkPermissions(['USER_DELETION']);
    const userId = req.params.id;
    const deletedUser = await User.deleteById(userId);
    res.status(200).json({ deletedUser });
  } catch (err) {
    const message = `cannot delete user (${err.message})`;
    console.log(`${deleteUser.name}: ${message}`);
    res.status(err.statusCode || 404).json({ errorMessage: message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserFullInfoById,
  createUser,
  updateUserProfile,
  changeUserRole,
  loginUser,
  logoutUser,
  deleteUser,
};
