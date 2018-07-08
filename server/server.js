'use strict'
require('dotenv').load();

const bodyParser = require('body-parser');
const express = require('express');
const port = process.env.PORT || 8080;
const routes = require('./routes/routes');
const app = new express();

app.use(bodyParser.json({limit: '4mb'}));
//allow cors !!! TODO check if needed in production (for mobile access and other clients)
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-http-method-override, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

app.use('/',routes);

app.listen(port, function() {
  console.log("listening on port: ", port);
})
