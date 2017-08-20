module.exports = {
  scripts: {
    default: 'NODE_ENV=production node server.js',

    dev: {
      default: {
        script: 'NODE_ENV=development node server.js',
        description: 'Run express server with Hot Module Reloading',
      },

      server: {
        script: 'NODE_ENV=production nodemon server.js',
        description: 'Run express server with Server Side Rendering',
      },
    },

    build: {
      default: 'webpack',

      watch: {
        script: 'webpack --watch',
        description: 'Run webpack in watch mode',
      },
    },
    test: {
      default: 'jest',

      watch: {
        script: 'jest --watch',
        description: 'Run Jest in watch mode',
      },
    },
  },
};
