/* Dependenceies */

var express  = require('express')
var mongoose = require('mongoose')


/* Variables */ 

var app  = express()
var port = process.env.PORT || 8080

/* Database Connection */

mongoose.connect('mongodb://localhost:8080/proj2', {useMongoClient : true}) 
mongoose.Promise = Promise 


/* Connect Routes */



/* Server */

// spin up server

app.listen(port, () => {
  console.log(`\n ----------------------App listing on ${port}-----------------------`)
})
  
