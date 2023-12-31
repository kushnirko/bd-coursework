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
