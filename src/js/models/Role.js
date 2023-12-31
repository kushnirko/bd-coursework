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
