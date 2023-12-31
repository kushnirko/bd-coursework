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
