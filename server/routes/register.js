'use strict'
require('dotenv').load();

const express = require('express');
const knex = require('../knexfile');
const helpers = require('../misc/helpers');
const router = express.Router();

// post /register 
router.post('/', async function(req, res) {
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
    knex.insert(insert1).into("authusers").then(function (id) {
        //console.log(id);
        res.send(id)
    }).catch(function(e) {
        res.status(401).json({
            status: "error",
            error_type: "regerr",
            message: "general"
        })
    })


})

module.exports = router
