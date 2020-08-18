'use strict'

const bodyParser = require('body-parser');

module.exports = {
  init: initExpress
};


function initExpress(app) {
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

  app.use(function(req, res, next) {
    req.resources = req.resources || {};
    return next()
  })
}
