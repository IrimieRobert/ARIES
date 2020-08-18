'use strict'
const User = require('../models/userModel');

module.exports = {
  getUsers,
  getUserById,
  createUsers,
  deleteUser,
  updateUser,
};

function updateUser(req, res, next) {
  const { userId } = req.params;
  const updateData = req.body;
  console.log('userId', userId)
  User.findOneAndUpdate({ _id: userId }, updateData, function(err, result) {
    if(err) {
      console.log('err', err);
      req.resources.users = {test:2};

      return next({message: 'Some specific error here'})
    }
    console.log('result', result);
    req.resources.users = result;
    next();
  })
}

function deleteUser(req, res, next) {
  console.log('req.params', req.params);
  const { userId } = req.params;

  User.deleteOne({_id: userId}, function(err, result) {
    if(err) {
      console.log('err', err)
      return res.send('error from delete user')
    }

    next()
  })
}


function getUsers(req, res, next) {
  console.log('GET USERS');
  User.find(function(err, result) {
    if(err) {
      console.log('err', err);
      return res.send('Some error from get users')
    }

    req.resources.users = result;
    next()
  })
}


function getUserById(req, res, next) {
  User.find({ _id: req.params.userId }, function(err, result) {
    if(err) {
      console.log('err', err);
      return res.send('Some error from get users')
    }

    req.resources.users = result;
    next()
  })
}

function createUsers(req, res, next) {
  console.log('req.body',req.body);
  const user = new User(req.body);

  user.save(function(err, result) {
    if(err) {
      return next(err)
    }
    req.resources.users = result;
    return next()
  });
}

function midd2(req, res, next) {
  console.log('midd 2');
  next()

}

function midd3(req, res, next) {
  console.log('midd 3');
  res.send('Midd 3')
}
