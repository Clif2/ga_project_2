const mongoose = require('mongoose')
      Schema   = mongoose.Schema
      ObjectId = Schema.Types.ObjectId

let imageSchema = new Schema ({
  url = String 
  albums = [{
    type: ObjectId
    ref: 'Album'
  }]
})

let Image = mongoose.model('Image', imageSchema)

module.exports = Image
