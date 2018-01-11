'use strict'
/* Dependenceies */

const express  = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const cors = require('cors')
const bodyParser = require('body-parser')
const pug = require('pug')


/* Variables */ 

let app  = express()
let port = process.env.PORT || 8080
let index = require('./routes/index')


/* Views */

app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'))


/* Middleware */

app.use(bodyParser.urlencoded ({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(methodOverride('_method'))

/* Routing */

app.use('/', index)


/* Server */
// spin up server
app.listen(port, () => {
  console.log(`\n ----------------------App listing on ${port}-----------------------`)
})
  
