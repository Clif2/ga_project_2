'use strict'

const mongoose = require('mongoose')
//const mUrl = 'mongodb://ad:min@ds249787.mlab.com:49787/cliff-project2'

mongoose.connect('mongodb://localhost/project-2-postNuke', {useMongoClient : true}) 
//mongoose.connect( mUrl , {useMongoClient : true}) 

mongoose.Promise = Promise 

module.exports = mongoose 
