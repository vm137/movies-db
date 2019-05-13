const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpackConfig = require('../webpack');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
} else {
  // eslint-disable-next-line global-require
  const serverRenderer = require('../dist/js/serverRenderer').default;

  app.use(express.static('dist'));
  app.use(serverRenderer());
}

module.exports = app;
