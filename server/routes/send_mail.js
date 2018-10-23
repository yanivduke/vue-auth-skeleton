'use strict'
require('dotenv').load();

const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();


// post /sendmail 
router.post('/', async function(req, res) {
    console.log("body is: " + JSON.stringify(req.body))
    console.log("params are: "+JSON.stringify(req.body.name))

    var text = req.body.name;
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'duke.web.dev@gmail.com', // Your email id
            pass: 'aaAA11!!' // Your password
        }
    });
    
    var mailOptions = {
        from: 'duke.web.dev@gmail.com', // sender address
        to: 'duke.web.dev@gmail.com', // list of receivers
        subject: 'DukeCode Call message from: ' + req.body.name, // Subject line
        //text: text //, // plaintext body
        html: '<b>return to:</b>&nbsp; - ' + req.body.email + '<br /><b>message:</b><br />' + text // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
    
});

module.exports = router
