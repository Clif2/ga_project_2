'use strict'

/* Dependencies */

const express  = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const cors = require('cors')
const bodyParser = require('body-parser')
const pug = require('pug')

/* Variables */ 

const app  = express()
const PORT = process.env.PORT || 8080 //SCREAMING_SNAKE_CASE for CONSTANTS
const index = require('./routes/index')

/* Views */

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))

/* Middleware */

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(methodOverride('_method'))

/* Routing */

app.use('/', index)

/* Server */

app.set('port', PORT)

// spin up server
app.listen(app.get('port'), () => {
  console.log(`\n ----------------------App listing on ${PORT}-----------------------`)
})
