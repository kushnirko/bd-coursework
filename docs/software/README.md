# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_coursework
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `db_coursework` ;

-- -----------------------------------------------------
-- Schema db_coursework
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_coursework` ;
USE `db_coursework` ;

-- -----------------------------------------------------
-- Table `db_coursework`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_coursework`.`role` ;

CREATE TABLE IF NOT EXISTS `db_coursework`.`role` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_coursework`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_coursework`.`user` ;

CREATE TABLE IF NOT EXISTS `db_coursework`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE,
  INDEX `fk_user_role_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_role`
    FOREIGN KEY (`role_id`)
    REFERENCES `db_coursework`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_coursework`.`request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_coursework`.`request` ;

CREATE TABLE IF NOT EXISTS `db_coursework`.`request` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `target` VARCHAR(255) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_request_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_request_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_coursework`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_coursework`.`filter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_coursework`.`filter` ;

CREATE TABLE IF NOT EXISTS `db_coursework`.`filter` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `keyword` VARCHAR(255) NULL,
  `country` VARCHAR(45) NULL,
  `format` VARCHAR(45) NULL,
  `request_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_filter_request1_idx` (`request_id` ASC) VISIBLE,
  CONSTRAINT `fk_filter_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `db_coursework`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_coursework`.`file`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_coursework`.`file` ;

CREATE TABLE IF NOT EXISTS `db_coursework`.`file` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL,
  `uploadDate` DATE NOT NULL,
  `lastEditTime` DATETIME NOT NULL,
  `format` VARCHAR(45) NOT NULL,
  `hasVisualization` TINYINT UNSIGNED NOT NULL,
  `authorId` INT NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_coursework`.`search`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_coursework`.`search` ;

CREATE TABLE IF NOT EXISTS `db_coursework`.`search` (
  `request_id` INT UNSIGNED NOT NULL,
  `file_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`request_id`, `file_id`),
  INDEX `fk_search_file1_idx` (`file_id` ASC) VISIBLE,
  CONSTRAINT `fk_search_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `db_coursework`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_search_file1`
    FOREIGN KEY (`file_id`)
    REFERENCES `db_coursework`.`file` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_coursework`.`right`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_coursework`.`right` ;

CREATE TABLE IF NOT EXISTS `db_coursework`.`right` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_coursework`.`grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_coursework`.`grant` ;

CREATE TABLE IF NOT EXISTS `db_coursework`.`grant` (
  `right_id` INT UNSIGNED NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`right_id`, `role_id`),
  INDEX `fk_grant_right1_idx` (`right_id` ASC) VISIBLE,
  CONSTRAINT `fk_grant_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db_coursework`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_right1`
    FOREIGN KEY (`right_id`)
    REFERENCES `db_coursework`.`right` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_coursework`.`permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_coursework`.`permission` ;

CREATE TABLE IF NOT EXISTS `db_coursework`.`permission` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `right_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_permission_right1_idx` (`right_id` ASC) VISIBLE,
  CONSTRAINT `fk_permission_right1`
    FOREIGN KEY (`right_id`)
    REFERENCES `db_coursework`.`right` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_coursework`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_coursework`.`access` ;

CREATE TABLE IF NOT EXISTS `db_coursework`.`access` (
  `role_id` INT UNSIGNED NOT NULL,
  `file_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`role_id`, `file_id`),
  INDEX `fk_access_file1_idx` (`file_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db_coursework`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_file1`
    FOREIGN KEY (`file_id`)
    REFERENCES `db_coursework`.`file` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Стандартні дані для таблиці `db_coursework`.`right`
-- -----------------------------------------------------
START TRANSACTION;
USE `db_coursework`;
INSERT INTO `db_coursework`.`right` (`id`, `name`) VALUES (1, 'REGISTRATION');
INSERT INTO `db_coursework`.`right` (`id`, `name`) VALUES (2, 'PROFILE');
INSERT INTO `db_coursework`.`right` (`id`, `name`) VALUES (3, 'LOGIN');
INSERT INTO `db_coursework`.`right` (`id`, `name`) VALUES (4, 'LOGOUT');
INSERT INTO `db_coursework`.`right` (`id`, `name`) VALUES (5, 'DATA_INTERACTION');
INSERT INTO `db_coursework`.`right` (`id`, `name`) VALUES (6, 'DATA_CRUD');
INSERT INTO `db_coursework`.`right` (`id`, `name`) VALUES (7, 'PUBLICATION_VERIFICATION');
INSERT INTO `db_coursework`.`right` (`id`, `name`) VALUES (8, 'USER_MODERATING');

COMMIT;


-- -----------------------------------------------------
-- Стандартні дані для таблиці `db_coursework`.`permission`
-- -----------------------------------------------------
START TRANSACTION;
USE `db_coursework`;
INSERT INTO `db_coursework`.`permission` (`id`, `name`, `right_id`) VALUES (1, 'DATA_COMPARE', 5);
INSERT INTO `db_coursework`.`permission` (`id`, `name`, `right_id`) VALUES (2, 'DATA_VISUALIZE', 5);
INSERT INTO `db_coursework`.`permission` (`id`, `name`, `right_id`) VALUES (3, 'DATA_DOWNLOAD', 5);
INSERT INTO `db_coursework`.`permission` (`id`, `name`, `right_id`) VALUES (4, 'DATA_SEARCH', 5);
INSERT INTO `db_coursework`.`permission` (`id`, `name`, `right_id`) VALUES (5, 'DATA_UPLOAD', 6);
INSERT INTO `db_coursework`.`permission` (`id`, `name`, `right_id`) VALUES (6, 'DATA_EDIT', 6);
INSERT INTO `db_coursework`.`permission` (`id`, `name`, `right_id`) VALUES (7, 'DATA_PUBLISH', 6);
INSERT INTO `db_coursework`.`permission` (`id`, `name`, `right_id`) VALUES (8, 'DATA_REMOVE', 6);
INSERT INTO `db_coursework`.`permission` (`id`, `name`, `right_id`) VALUES (9, 'USER_BLOCKING', 8);
INSERT INTO `db_coursework`.`permission` (`id`, `name`, `right_id`) VALUES (10, 'USER_DELETION', 8);

COMMIT;


-- -----------------------------------------------------
-- Стандартні дані для таблиці `db_coursework`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `db_coursework`;
INSERT INTO `db_coursework`.`role` (`id`, `name`, `description`) VALUES (1, 'USER', 'Звичайний користувач');
INSERT INTO `db_coursework`.`role` (`id`, `name`, `description`) VALUES (2, 'EDITOR', 'Редактор або автор');
INSERT INTO `db_coursework`.`role` (`id`, `name`, `description`) VALUES (3, 'ADMIN', 'Адміністратор');

COMMIT;


-- -----------------------------------------------------
-- Стандартні дані для таблиці `db_coursework`.`grant`
-- -----------------------------------------------------
START TRANSACTION;
USE `db_coursework`;
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (1, 1);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (1, 2);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (1, 3);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (2, 1);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (2, 2);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (2, 3);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (3, 1);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (3, 2);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (3, 3);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (4, 1);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (4, 2);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (4, 3);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (5, 1);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (5, 2);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (5, 3);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (6, 2);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (6, 3);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (7, 3);
INSERT INTO `db_coursework`.`grant` (`right_id`, `role_id`) VALUES (8, 3);

COMMIT;


-- -----------------------------------------------------
-- Стандартні дані для таблиці `db_coursework`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `db_coursework`;
INSERT INTO `db_coursework`.`user` (`id`, `nickname`, `firstname`, `lastname`, `email`, `password`, `role_id`) VALUES (0, 'root', '-', '-', '-', '8bb53f5a26bec7901f4d5c743f731c17bd4fff21af3accb52effc0a7f6f8fca2', 3);

COMMIT;
```

## RESTfull сервіс для управління даними

### Модуль для запуску Express.js вебсервера

#### server

```js
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
```

### Модулі для роботи з сесіями користувача

#### client

```js
'use strict';

const Session = require('./session');
const User = require('./models/User');

const UNIX_EPOCH = 'Thu, 01 Jan 1970 00:00:00 GMT';
const COOKIE_EXPIRE = 'Fri, 01 Jan 2100 00:00:00 GMT';
const COOKIE_DELETE = `=deleted; Expires=${UNIX_EPOCH}; Path=/; Domain=`;

const parseHost = (host) => {
  if (!host) return 'no-host-name-in-http-headers';
  const portOffset = host.indexOf(':');
  if (portOffset > -1) host = host.substring(0, portOffset);
  return host;
};

class Client {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.host = parseHost(req.headers.host);
    this.token = undefined;
    this.session = null;
    this.user = null;
    this.cookie = {};
    this.preparedCookie = [];
    this.parseCookie();
  }

  static async getInstance(req, res) {
    const client = new Client(req, res);
    await Session.restore(client).catch((err) => {
      console.log(
        `Client.getInstance(): cannot restore session (${err.message})`,
      );
    });
    return client;
  }

  parseCookie() {
    const { req } = this;
    const { cookie } = req.headers;
    if (!cookie) return;
    const items = cookie.split(';');
    for (const item of items) {
      const parts = item.split('=');
      const key = parts[0].trim();
      const val = parts[1] || '';
      this.cookie[key] = val.trim();
    }
  }

  setCookie(name, val, httpOnly = false) {
    const { host } = this;
    const expires = `expires=${COOKIE_EXPIRE}`;
    let cookie = `${name}=${val}; ${expires}; Path=/; Domain=${host}`;
    if (httpOnly) cookie += '; HttpOnly';
    this.preparedCookie.push(cookie);
  }

  deleteCookie(name) {
    this.preparedCookie.push(name + COOKIE_DELETE + this.host);
  }

  sendCookie() {
    const { res, preparedCookie } = this;
    if (preparedCookie.length && !res.headersSent) {
      console.dir({ preparedCookie });
      res.setHeader('Set-Cookie', preparedCookie);
    }
  }

  checkLogin() {
    if (!this.session) {
      const err = new Error("You aren't logged in");
      err.statusCode = 401;
      throw err;
    }
  }

  checkLogout() {
    if (this.session) {
      const err = new Error('You are already logged in');
      err.statusCode = 409;
      throw err;
    }
  }

  checkRole(role) {
    this.checkLogin();
    if (!User.hasRole(this.user, role)) {
      const err = new Error('You have the wrong role');
      err.statusCode = 403;
      throw err;
    }
  }

  checkRights(rights) {
    this.checkLogin();
    if (!User.hasRights(this.user, rights)) {
      const err = new Error("You don't have required rights");
      err.statusCode = 403;
      throw err;
    }
  }

  checkPermissions(permissions) {
    this.checkLogin();
    if (!User.hasPermissions(this.user, permissions)) {
      const err = new Error("You don't have required permissions");
      err.statusCode = 403;
      throw err;
    }
  }
}

module.exports = Client;
```

#### session

```js
'use strict';

const storage = require('./sessionStorage');
const User = require('./models/User');

const TOKEN_LENGTH = 32;
const ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ALPHA = ALPHA_UPPER + ALPHA_LOWER;
const DIGIT = '0123456789';
const ALPHA_DIGIT = ALPHA + DIGIT;

const generateToken = () => {
  const base = ALPHA_DIGIT.length;
  let key = '';
  for (let i = 0; i < TOKEN_LENGTH; i++) {
    const index = Math.floor(Math.random() * base);
    key += ALPHA_DIGIT[index];
  }
  return key;
};

class Session extends Map {
  constructor(token) {
    super();
    this.token = token;
  }

  static start(client) {
    if (client.session) return client.session;
    const token = generateToken();
    client.token = token;
    const session = new Session(token);
    client.session = session;
    client.setCookie('token', token);
    storage.set(token, session);
    return session;
  }

  static restore(client) {
    const { cookie } = client;
    if (!cookie) {
      return Promise.reject(new Error('No cookie'));
    }
    const sessionToken = cookie.token;
    if (!sessionToken) {
      return Promise.reject(new Error('No session token in cookie'));
    }
    return new Promise((resolve, reject) => {
      storage.get(sessionToken, async (err, session) => {
        if (err) {
          reject(new Error('No session'));
        } else {
          Object.setPrototypeOf(session, Session.prototype);
          client.token = sessionToken;
          client.session = session;
          client.user = await User.getFullInfoById(session.get('userId'));
          resolve(session);
        }
      });
    });
  }

  static delete(client) {
    const { token } = client;
    if (token) {
      client.deleteCookie('token');
      client.token = undefined;
      client.session = null;
      storage.delete(token);
    }
  }

  save() {
    storage.save(this.token);
  }
}

module.exports = Session;
```

#### sessionStorage

```js
'use strict';

const fs = require('fs');
const path = require('path');
const v8 = require('v8');

const PATH = `${__dirname}/sessions`;

const safePath =
  (fn) =>
    (token, ...args) => {
      const callback = args[args.length - 1];
      if (typeof token !== 'string') {
        callback(new Error('Invalid session token'));
        return;
      }
      const fileName = path.join(PATH, token);
      if (!fileName.startsWith(PATH)) {
        callback(new Error('Invalid session token'));
        return;
      }
      fn(fileName, ...args);
    };

const readSession = safePath(fs.readFile);
const writeSession = safePath(fs.writeFile);
const deleteSession = safePath(fs.unlink);

class SessionStorage extends Map {
  get(key, callback) {
    const value = super.get(key);
    if (value) {
      callback(null, value);
      return;
    }
    readSession(key, (err, data) => {
      if (err) {
        callback(err);
        return;
      }
      console.log(`Session loaded: ${key}`);
      const session = v8.deserialize(data);
      super.set(key, session);
      callback(null, session);
    });
  }

  save(key) {
    const value = super.get(key);
    if (value) {
      const data = v8.serialize(value);
      writeSession(key, data, () => {
        console.log(`Session saved: ${key}`);
      });
    }
  }

  delete(key) {
    console.log('Delete: ', key);
    deleteSession(key, () => {
      console.log(`Session deleted: ${key}`);
    });
  }
}

module.exports = new SessionStorage();
```

### Модулі маршрутизації

#### permissionRoutes

```js
'use strict';

const express = require('express');
const permissionController = require('../controllers/permissionController');
const router = new express.Router();

router.get('/', permissionController.getAllPermissions);
router.get('/:id', permissionController.getPermissionById);

module.exports = router;
```

#### rightRoutes

```js
'use strict';

const express = require('express');
const rightController = require('../controllers/rightController');
const router = new express.Router();

router.get('/', rightController.getAllRights);
router.get('/:id', rightController.getRightById);

module.exports = router;
```

#### roleRoutes

```js
'use strict';

const express = require('express');
const roleController = require('../controllers/roleController');
const router = new express.Router();

router.get('/', roleController.getAllRoles);
router.get('/:id', roleController.getRoleById);

module.exports = router;
```

#### userRoutes

```js
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
```

### Контролери

#### permissionController

```js
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
```

#### rightController

```js
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
```

#### roleController

```js
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
```

#### userController

```js
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
    const id = client.user[0].id;
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
```

### Моделі

#### Permission

```js
'use strict';

const executeSql = require('../database').executeSql;

class Permission {
  static async getAll() {
    const sql = `SELECT * FROM permission;`;

    try {
      return executeSql(sql);
    } catch (err) {
      console.log(
        `Permission.getAll(): cannot get list of permissions (${err.message})`,
      );
      throw err;
    }
  }

  static async getById(id) {
    const sql = `SELECT * FROM permission WHERE id = ?;`;

    try {
      const [permission] = await executeSql(sql, [id]);
      if (!permission) throw new Error('No permission with this id');
      return permission;
    } catch (err) {
      console.log(
        `Permission.getById(): cannot get permission (${err.message})`,
      );
      throw err;
    }
  }
}

module.exports = Permission;
```

#### Right

```js
'use strict';

require('dotenv').config();
const DB_NAME = process.env.DB_NAME;

const executeSql = require('../database').executeSql;

class Right {
  static async getAll() {
    const sql = `SELECT * FROM ${DB_NAME}.right;`;

    try {
      return executeSql(sql);
    } catch (err) {
      console.log(`Right.getAll(): cannot get list of rights (${err.message})`);
      throw err;
    }
  }

  static async getById(id) {
    const sql = `SELECT * FROM ${DB_NAME}.right WHERE id = ?;`;

    try {
      const [right] = await executeSql(sql, [id]);
      if (!right) throw new Error('No right with this id');
      return right;
    } catch (err) {
      console.log(`Right.getById(): cannot get right (${err.message})`);
      throw err;
    }
  }

  static async getFullInfoById(id) {
    try {
      const right = await Right.getById(id);
      right.permissions = await this.getPermissionsById(right.id);
      return right;
    } catch (err) {
      console.log(`Right.getFullInfoById(): cannot get right (${err.message})`);
      throw err;
    }
  }

  static async getPermissionsById(id) {
    const sql = 'SELECT * FROM permission WHERE right_id = ?;';

    try {
      return executeSql(sql, [id]);
    } catch (err) {
      console.log(
        `Right.getPermissionById(): cannot get permissions for right (${err.message})`,
      );
      throw err;
    }
  }
}

module.exports = Right;
```

#### Role

```js
'use strict';

require('dotenv').config();
const DB_NAME = process.env.DB_NAME;

const executeSql = require('../database').executeSql;
const Right = require('./Right');

class Role {
  static async getAll() {
    const sql = 'SELECT * FROM role;';

    try {
      return executeSql(sql);
    } catch (err) {
      console.log(`Role.getAll(): cannot get list of rights (${err.message})`);
      throw err;
    }
  }

  static async getById(id) {
    const sql = 'SELECT * FROM role WHERE id = ?;';

    try {
      const [role] = await executeSql(sql, [id]);
      if (!role) throw new Error('No role with this id');
      return role;
    } catch (err) {
      console.log(`Role.getById(): cannot get role (${err.message})`);
      throw err;
    }
  }

  static async getFullInfoById(id) {
    try {
      const role = await Role.getById(id);
      role.rights = await this.getRightsById(role.id);
      return role;
    } catch (err) {
      console.log(`Role.getFullInfoById(): cannot get role (${err.message})`);
      throw err;
    }
  }

  static async getRightsById(id) {
    const sql = `SELECT right_id FROM ${DB_NAME}.grant WHERE role_id = ?;`;

    try {
      const rights = [];
      const rightIds = await executeSql(sql, [id]);
      for await (const { right_id } of rightIds) {
        rights.push(await Right.getFullInfoById(right_id));
      }
      return rights;
    } catch (err) {
      console.log(`Role.getRightsById(): cannot get rights (${err.message})`);
      throw err;
    }
  }
}

module.exports = Role;
```

#### User

```js
'use strict';

const executeSql = require('../database').executeSql;
const safeExecuteSql = require('../database').safeExecuteSql;
const Role = require('./Role');

class User {
  static async getAll() {
    const sql = 'SELECT * FROM user;';

    try {
      return executeSql(sql);
    } catch (err) {
      console.log(`User.getAll(): cannot get list of users (${err.message})`);
      throw err;
    }
  }

  static async getById(id) {
    const sql = `SELECT * FROM user WHERE id = ?;`;

    try {
      const [user] = await executeSql(sql, [id]);
      if (!user) throw new Error('No user with this id');
      return user;
    } catch (err) {
      console.log(`User.getById(): cannot get user (${err.message})`);
      throw err;
    }
  }

  static async getFullInfoById(id) {
    try {
      const user = await User.getById(id);
      user.role = await Role.getFullInfoById(user.role_id);
      return user;
    } catch (err) {
      console.log(`User.getFullInfoById(): cannot get user (${err.message})`);
      throw err;
    }
  }

  static async getByNickname(nickname) {
    const sql = 'SELECT * FROM user WHERE nickname = ?;';

    try {
      const [user] = await executeSql(sql, [nickname]);
      if (!user) throw new Error('No user with this nickname');
      return user;
    } catch (err) {
      console.log(`User.getByNickname(): cannot get user (${err.message})`);
      throw err;
    }
  }

  static hasRole(userInfo, role) {
    return userInfo.role.name === role;
  }

  static hasRights(userInfo, rights) {
    const userRights = userInfo.role.rights;
    const names = userRights.map((right) => right.name);
    for (const right of rights) {
      if (!names.includes(right)) return false;
    }
    return true;
  }

  static hasPermissions(userInfo, permissions) {
    const userRights = userInfo.role.rights;
    const userPermissions = userRights.flatMap((right) => right.permissions);
    const names = userPermissions.map((permission) => permission.name);
    for (const permission of permissions) {
      if (!names.includes(permission)) return false;
    }
    return true;
  }

  static async create({
                        nickname,
                        firstname,
                        lastname = null,
                        email,
                        password,
                      }) {
    const sql = `
    INSERT INTO user(
      nickname,
      firstname,
      lastname,
      email,
      password,
      role_id
    )
    VALUES(?, ?, ?, ?, SHA2(?, 256), 1)
    `;
    const newUserData = [nickname, firstname, lastname, email, password];

    try {
      const creationReport = await executeSql(sql, newUserData);
      const newUserId = creationReport.insertId;
      return this.getById(newUserId);
    } catch (err) {
      console.log(`User.create(): cannot create user (${err.message})`);
      throw err;
    }
  }

  static async updateById(id, data) {
    const newData = [];
    const fields = Object.entries(data)
      .map(([key, value]) => {
        newData.push(value ? value : null);
        if (key !== 'password') {
          return `${key} = ?`;
        } else {
          return 'password = SHA2(?, 256)';
        }
      })
      .join(', ');
    const sql = `UPDATE user SET ${fields} WHERE id = ?;`;

    try {
      await safeExecuteSql(sql, [...newData, id]);
      return this.getById(id);
    } catch (err) {
      console.log(
        `User.updateById(): cannot update user profile (${err.message})`,
      );
      throw err;
    }
  }

  static async deleteById(id) {
    const sql = 'DELETE FROM user WHERE id = ?;';

    try {
      const user = await this.getById(id);
      await executeSql(sql, [id]);
      return user;
    } catch (err) {
      console.log(`User.deleteById(): cannot delete user (${err.message})`);
      throw err;
    }
  }
}

module.exports = User;
```
