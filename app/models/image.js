'use strict'

const mongoose = require('./connection')
const Schema   = mongoose.Schema
//const ObjectId = Schema.Types.ObjectId


let imageSchema = new Schema ({
  url           : String,
//  albums        : [{
//    type: ObjectId,
//    ref: 'Album'
//  }]
})


const Image = mongoose.model('Image', imageSchema)
module.exports = Image
