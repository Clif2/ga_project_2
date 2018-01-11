'use strict'

const mongoose = require('mongoose')
const mUrl = 'mongodb://ad:min@ds249787.mlab.com:49787/cliff-project2'

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/project-2-postNuke', {useMongoClient : true}) 
}

mongoose.Promise = Promise 

module.exports = mongoose 
