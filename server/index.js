'use strict'
const express = require('express')
const app = express()

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api', (req, res) => res.send('Hello Aviv!!!'))

app.get('/api/login', function(req, res) {
    res.render('index',{user: "Great User",title:"duke login"});
  })
  
app.listen(3001, () => console.log('Example app listening on port 3001!'))

