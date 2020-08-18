'use strict'

const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/usersCtrl');
const commonCtrl = require('../controllers/commonCtrl');

router.get('/users', userCtrl.getUsers, commonCtrl.responseToJSON('users'));

// router.get('/users', userCtrl.getUsers, function(req, res, next) {
//   res.json(req.resources['users']);
// });

router.post('/users', userCtrl.createUsers, commonCtrl.responseToJSON('users'));

router.delete('/users/:userId', userCtrl.getUserById, userCtrl.deleteUser, commonCtrl.responseToJSON('users'));

router.put('/users/:userId', userCtrl.updateUser, commonCtrl.responseToJSON('users'));

module.exports = router;
