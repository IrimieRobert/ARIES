'use strict'

const mongoose = require('mongoose');
const { uri } = require('./index');

module.exports = {
  init: initMongoose,
};

function initMongoose() {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  process.on('SIGINT', cleanup) // for Ctrl + c
  process.on('SIGTERM', cleanup) // when terminate a process
  process.on('SIGHUP', cleanup)  // terminal goes away
}

function cleanup() {
  console.log('cleanup');
  mongoose.connection.close(function() {
    process.exit()
  })
}
