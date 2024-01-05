'use strict';

require('dotenv').config({ path: __dirname + '/../.env' });

const promiseMysql = require('mysql2/promise');

const access = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
};

const pool = promiseMysql.createPool(access);

const executeSql = async (sql, values) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [res] = await connection.execute(sql, values);
    return res;
  } catch (err) {
    const message = err.message;
    console.log(`${executeSql.name}: cannot execute SQL-script (${message})`);
    throw err;
  } finally {
    if (connection) await connection.release();
  }
};

const safeExecuteSql = async (sql, values) => {
  let connection = null;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();
    const [res] = await connection.execute(sql, values);
    await connection.commit();
    return res;
  } catch (err) {
    if (connection) await connection.rollback();
    const message = err.message;
    console.log(`${executeSql.name}: cannot execute SQL-script (${message})`);
    throw err;
  } finally {
    if (connection) await connection.release();
  }
};

module.exports = { pool, executeSql, safeExecuteSql };
