/* Dependenceies */

var express  = require('express')
    mongoose = require('mongoose')


/* Variables */ 

var app  = express()
    port = process.env.PORT || 4000

/* Database Connection */

mongoose.connect('mongodb://localhost/proj2', {UseMongoClient : true}) 
mongoose.Promise = Promise 


/* Connect Routes */



/* Server */

// spin up server

app.listen(port, () => {
  console.log(`\n ----------------------App listing on ${port}-----------------------`)
})
  
