'use strict'

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:8080/proj2', {useMongoClient : true}) 
mongoose.Promise = Promise 

module.exports = mongoose 
