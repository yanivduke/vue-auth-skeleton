'use strict'
require('dotenv').load();

const express = require('express');
const knex = require('../knexfile');
const router = express.Router();
const helpers = require('../misc/helpers');

// post /authenticate 
router.post('/' , function(req, res){
    //console.log("body is: " + JSON.stringify(req.body))
    //console.log("params are: "+JSON.stringify(req.body.username))
    //console.log("body is: " + req.body)

    knex.from('authusers')
        .where('authusers.user_id', req.body.username)
        .andWhere('is_approved', 'true')
        .andWhere('is_locked', 'false')
        .then(async function(dbRows){
                var token, payload, user_data;
                var currdatetime = new Date();
                var rndSession = await helpers.randomValueHex(16) // value 'd5be8583137bAA42'
                if(dbRows && dbRows.length) {
                  let shaPass = await helpers.GetHashBySalt(req.body.password,dbRows[0].password_salt,dbRows[0].password_format);
                  if(shaPass===dbRows[0].password){
                    payload = { 
                      id: dbRows[0].id,
                      user_id: dbRows[0].user_id,
                      login_date: currdatetime,
                      session_id:rndSession
                    }
                    user_data = {
                      id: dbRows[0].id,
                      user_id: dbRows[0].user_id,
                      login_date: currdatetime,
                      session_id:rndSession
                    }
                    helpers.signAndReplay(res, user_data, payload);
                  }
                  else{
                    helpers.replayError(res, "ססמה שגויה");
                  }
                }
                else{
                  helpers.replayError(res, "שגיאה במציאת משתמש");
                }
        })
        .catch(function(err){
            // other errors in promise chain
            //console.log("authentication error="+err.message);
            var msg = "שגיאה בשליפת נתונים";
            helpers.replayError(res, msg)
        });
        
    }
);

module.exports = router

