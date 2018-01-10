'use strict'
/* Dependenceies */

const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const pug = require('pug')

/* Variables */ 

//var routes = require('./routes')
//var images = require('./routes/imageRoutes')

var app  = express()
var port = process.env.PORT || 8080

/* Views */

app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index', {title: 'Hello', message : 'Dirty Code to MVP'})
})

/* Database Connection */
// moved to connection.js in models
//mongoose.connect('mongodb://localhost:8080/proj2', {useMongoClient : true}) 
//mongoose.Promise = Promise 

/* Middleware */

app.use(bodyParser.urlencoded ({extended: true}))
app.use(bodyParser.json())
app.use(cors())

/* Connect Routes */
const imageController = require('./controllers/imageController')
app.use('/', imageController)
//app.use('/images', images)


/* Server */

// spin up server

app.listen(port, () => {
  console.log(`\n ----------------------App listing on ${port}-----------------------`)
})
  
