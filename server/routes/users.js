'use strict'
require('dotenv').load();

const express = require('express');
const bodyParser = require('body-parser');
const knex = require('../knexfile');
const helpers = require('../misc/helpers');
const router = express.Router();

router.use(bodyParser.json())

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function(req, res) {
  knex.select()
      .from('authusers')
      .then(function(users) {
        res.send(users);
      })
  }
);

router.get('/:id', function(req, res) {
  knex.from('authusers')
      .where('authusers.id', req.params.id)
      .then(function(data) {
        res.send(data)
      })
})

// post /register 
router.get('/add', async function(req, res) {
  let salt = helpers.cryptoRandomBytes(128);
  let pwd = req.body.password;

  let sha256 = await helpers.GetHashBySalt(pwd, salt, process.env.PASSWORD_FORMAT)

  let insert1 = {
      user_id: req.body.username, 
      password: sha256, 
      password_format: process.env.PASSWORD_FORMAT, 
      password_salt: salt, 
      is_approved: "false", 
      is_locked: "false"
  }
  await knex.insert(insert1).into("authusers").then(function (id) {
      console.log(id);
  })
})

module.exports = router;
