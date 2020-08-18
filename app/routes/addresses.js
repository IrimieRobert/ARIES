'use strict'

const express = require('express');
const router = express.Router();

const addressesCtrl = require('../controllers/addressesCtrl');
const commonCtrl = require('../controllers/commonCtrl');

// function isAdmin(req, res, next) {
//     if(true){
//         console.log('Only Admin');
//         next();
//     } 
//
//     return res.status(401).send();
// }

router.get('/addresses', addressesCtrl.getAddresses, commonCtrl.responseToJSON('addresses'));

// router.get('/users', userCtrl.getUsers, function(req, res, next) {
//   res.json(req.resources['users']);
// });

router.post('/addresses', addressesCtrl.createAddress, commonCtrl.responseToJSON('addresses'));

router.delete('/addresses/:addressId', addressesCtrl.getAddressById, addressesCtrl.deleteAddress, commonCtrl.responseToJSON('addresses'));

router.put('/addresses/:addressId', addressesCtrl.updateAddress, commonCtrl.responseToJSON('addresses'));

module.exports = router;
