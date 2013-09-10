var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'contacts'
    },
    port: 3000,
    db: 'rkrcontacts'
  },

  test: {
    root: rootPath,
    app: {
      name: 'contacts'
    },
    port: 3000,
    db: 'mongodb://localhost/contacts'
  },

  production: {
    root: rootPath,
    app: {
      name: 'contacts'
    },
    port: 3000,
    db: 'mongodb://localhost/contacts'
  }
};

module.exports = config[env];
