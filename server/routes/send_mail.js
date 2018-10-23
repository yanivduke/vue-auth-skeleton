'use strict'
require('dotenv').load();

const express = require('express');
const mailer = require('express-mailer');
const router = express.Router();

mailer.extend(express, {
    from: 'duke.web.dev@gmail.com',
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
      user: 'duke.web.dev@gmail.com',
      pass: 'aaAA11!!'
    }
  });
// post /register 
router.post('/', async function(req, res) {
    express.mailer.send('email', {
    to: 'duke.web.dev@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field. 
    subject: 'Call request from DukeCode By: ' + req.body.data.name, // REQUIRED.
    //otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
    }, function (err) {
    if (err) {
        // handle error
        console.log(err);
        res.send('There was an error sending the email');
        return;
    }
    res.send('Email Sent');
    });
})

module.exports = router
