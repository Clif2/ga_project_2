'use strict' // 

const mongoose = require('./connection')
const Schema   = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let imageSchema = new Schema({
  url: String,
  albums: [{
    type: ObjectId,
    ref: 'Album'
  }]
})

// very nit-picky but I would probably just write this as is, since it's already clear what it is
// module.exports = mongoose.model('Image', imageSchema)
const Image = mongoose.model('Image', imageSchema)
module.exports = Image
