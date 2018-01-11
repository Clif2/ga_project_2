'use strict'
/* Dependenceies */

const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const pug = require('pug')

/* Variables */ 

let app  = express()
let port = process.env.PORT || 8080

/* Views */

app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'))

/* Middleware */

app.use(bodyParser.urlencoded ({extended: true}))
app.use(bodyParser.json())
app.use(cors())

/* Routing */

let index = require('./routes/index')
app.use('/', index)


/* Server */
// spin up server
app.listen(port, () => {
  console.log(`\n ----------------------App listing on ${port}-----------------------`)
})
  
