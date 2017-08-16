module.exports = {
  scripts: {
    default: 'NODE_ENV=production nodemon server.js',

    dev: {
      script: 'NODE_ENV=development node server.js',
      description: 'Run express server with Hot Module Reloading',
    },

    build: {
      default: 'webpack && say webpack finished',

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
