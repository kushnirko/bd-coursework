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
