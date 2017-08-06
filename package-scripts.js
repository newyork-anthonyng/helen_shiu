const npsUtils = require('nps-utils');
const series = npsUtils.series;

module.exports = {
  scripts: {
    default: 'babel-node server.js',

    build: {
      default: 'webpack',

      watch: {
        script: 'webpack --watch',
        description: 'Automatically recompile changed files',
      },

      prod: {
        script: 'webpack -p',
        description: 'Run webpack in production mode',
      },

      all: {
        script: series(
          'webpack',
          'babel server.js -o dist/server.js'
        ),
        description: 'Compile frontend and backend code',
      },
    },

    dev: {
      script: 'webpack-dev-server',
      description: 'Run a local dev server with HMR',

      node: {
        script: 'nodemon server.js --exec babel-node',
        description: 'Run backend server with nodemon',
      },
    },
  },
};
