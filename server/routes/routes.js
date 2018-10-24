'use strict'
require('dotenv').load();

var express = require('express');
var router = express.Router();
var authorize = require('./authorize');
var users = require('./users');
var authentication_route = require('./authentication');
var register = require('./register');
var send_mail = require('./sendemail');
var env = process.env.NODE_ENV || 'development';

router.get('/api', function(req, res) {
  res.status(200).send('Hello API!');
});
router.use('/api/sendmail' , send_mail)
router.use('/api/authenticate' , authentication_route)
router.use('/api/register' , register)

router.options('*', function(req,res) {
  res.sendStatus(200); // ok
});

//===== Authorized connection only from here down ======
// check token valid and setup data in req.scope from token
router.use(authorize)

router.use('/api/users' , users );

module.exports = router;
