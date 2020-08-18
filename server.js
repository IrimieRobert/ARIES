'use strict'

const express = require('express');
const app = express();

const { PORT } = require('./app/config');

require('./app/config/express').init(app);
require('./app/config/routes').init(app);
require('./app/config/mongoose').init(app);

app.all('*', function(req, res, next) {
  return res
    .status(404)
    .json({
      status: 'fail',
      message: `Can't find ${req.url} on this server`,
    })
});


app.use(function(err, req, res, next) {
  console.log('error', err);
  return res
    .status(400)
    .json({
      status: 'error',
      message: err && err.message || 'Default message',
    })
});

app.listen(PORT, function() {
  console.log(`API on port ${PORT}`);
});


