'use strict'

module.exports = {
  responseToJSON
}


function responseToJSON(prop) {
  return function(req, res, next) {
    res.json({ data: req.resources[prop] });
  }
}
