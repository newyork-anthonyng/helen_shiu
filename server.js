const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');

app.set('view engine', 'ejs');
app.set('views', 'dist');

app.use(compression());
app.use(express.static('dist'));
app.use(express.static('assets'));

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.dev.config.js');
  const compiler = webpack(webpackConfig);

  const devMiddleware = require('webpack-dev-middleware');
  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));

  const hotMiddleware = require('webpack-hot-middleware');
  app.use(hotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));

  app.get('/work/:workname', (req, res) => {
    res.sendFile(path.join(__dirname, 'work.html'));
  });

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
} else {
  app.get('/work/:workname', (req, res, next) => {
    res.send('hello world');
  });

  const serverRender = require('./dist/serverRender').default;
  app.use(serverRender);
}

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log('Server running on ' + port);
});
