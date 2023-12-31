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
