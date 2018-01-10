/* Dependenceies */

var express  = require('express')
var mongoose = require('mongoose')

/* Variables */ 

var routes = require('./routes')
var images = require('./routes/imageRoutes')

var app  = express()
var port = process.env.PORT || 8080

/* Database Connection */

mongoose.connect('mongodb://localhost:8080/proj2', {useMongoClient : true}) 
mongoose.Promise = Promise 


/* Connect Routes */

app.use('/', routes)
app.use('/images', images)


/* Server */

// spin up server

app.listen(port, () => {
  console.log(`\n ----------------------App listing on ${port}-----------------------`)
})
  
