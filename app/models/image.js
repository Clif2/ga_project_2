'use strict'
const mongoose = require('mongoose')
const Schema   = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let imageSchema = new Schema ({
  url           : String,
  albums        : [{
    type: ObjectId,
    ref: 'Album'
  }]
})

let Image = mongoose.model('Image', imageSchema)

module.exports = Image
