'use strict'

const path = require('path');

module.exports = {
  PORT: 3000,
  uri: 'mongodb://localhost/ARIES',
  pathToUpload: path.join(__dirname, '../../../uploads/')
};
