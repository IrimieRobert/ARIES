'use strict'
const Address = require('../models/addressModel');

module.exports = {
  getAddresses,
  getAddressById,
  createAddress,
  deleteAddress,
  updateAddress,
};

function updateAddress(req, res, next) {
  const { addressId } = req.params;
  const updateData = req.body;
  console.log('addressId', addressId)
  Address.findOneAndUpdate({ _id: addressId }, updateData, function(err, result) {
    if(err) {
      console.log('err', err);
      req.resources.addresses = {test:2};

      return next({message: 'Some specific error here'})
    }
    console.log('result', result);
    req.resources.addresses = result;
    next();
  })
}

function deleteAddress(req, res, next) {
  console.log('req.params', req.params);
  const { addressId } = req.params;

  Address.deleteOne({_id: addressId}, function(err, result) {
    if(err) {
      console.log('err', err)
      return res.send('error from delete user')
    }

    next()
  })
}

function getAddresses(req, res, next) {
  console.log('GET USERS');
  Address.find(function(err, result) {
    if(err) {
      console.log('err', err);
      return res.send('Some error from get users')
    }

    req.resources.addresses = result;
    next()
  })
}


function getAddressById(req, res, next) {
  Address.find({ _id: req.params.addressId }, function(err, result) {
    if(err) {
      console.log('err', err);
      return res.send('Some error from get users')
    }

    req.resources.addresses = result;
    next()
  })
}

function createAddress(req, res, next) {
  console.log('req.body',req.body);
  const address = new Address(req.body);

  address.save(function(err, result) {
    if(err) {
      return next(err)
    }
    req.resources.addresses = result;
    return next()
  });
}
