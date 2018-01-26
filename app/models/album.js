'use strict'

const mongoose = require('./connection');
const Schema   = mongoose.Schema

let albumSchema = new Schema ({
  name : String
  // if you dont have any plans to do queries on images independently of albums, it makes sense to have them as sub-documents
})

let Album = mongoose.model('Album', albumSchema)

module.exports = Album 
