const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'reto'
    },
    port: process.env.PORT || 4000,
    db: 'mongodb://luisc:luisc1@ds139954.mlab.com:39954/evercheck-test-6'
  },

  test: {
    root: rootPath,
    app: {
      name: 'reto'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/reto-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'reto'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/reto-production'
  }
};

module.exports = config[env];
