'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const db = require('./database');
const Client = require('./client');

const permissionRoutes = require('./routes/permissionRoutes');
const rightRoutes = require('./routes/rightRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userRoutes = require('./routes/userRoutes');
const userController = require('./controllers/userController');

app.use(express.json());

app.use('/info/permissions', permissionRoutes);
app.use('/info/rights', rightRoutes);
app.use('/info/roles', roleRoutes);
app.post('/signup', userController.createUser);

app.use(async (req, res, next) => {
  req.client = await Client.getInstance(req, res);
  next();
});

app.post('/login', userController.loginUser);
app.patch('/profile', userController.updateUserProfile);
app.delete('/logout', userController.logoutUser);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const closeServer = async () => {
  console.log('\nStarting the process of closing the app...');
  try {
    await db.pool.end();
    await server.close(() => {
      console.log('The app is closed. Bye!');
      process.exit();
    });
  } catch (err) {
    console.error('Error during closing the app: ' + err.message);
    process.exit(1);
  }
};

// The SIGINT signal is sent to a process by its controlling terminal when a user wishes to interrupt the process
process.on('SIGINT', closeServer);
// The SIGTERM signal is sent to a process to request its termination
process.on('SIGTERM', closeServer);
