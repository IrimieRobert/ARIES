'use strict'

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const userCtrl = require('../controllers/usersCtrl');
const commonCtrl = require('../controllers/commonCtrl');
const { pathToUpload } = require('../config');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, pathToUpload)
    },

    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage: storage });

router.post('/upload-profile', upload.array('profilePicture', 2), function (req, res, next) {
    // console.log('FILE', req.file);
    // console.log('FILES', req.files);
    res.send('Uploaded');
});

router.get('/download-image', function (req, res, next) {
    const pathToFile = `${pathToUpload}/1597821512282-ildar-garifullin-ci2O2nDk5NU-unsplash.jpg`;
    console.log('pathToFile', pathToFile)
    res.download(pathToFile);
});

router.get('/users', userCtrl.getUsers, commonCtrl.responseToJSON('users'));

router.post('/users', userCtrl.createUsers, commonCtrl.responseToJSON('users'));

router.delete('/users/:userId', userCtrl.getUserById, userCtrl.deleteUser, commonCtrl.responseToJSON('users'));

router.put('/users/:userId', userCtrl.updateUser, commonCtrl.responseToJSON('users'));

module.exports = router;
