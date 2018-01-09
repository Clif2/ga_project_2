const mongoose = require('mongoose');
      Schema   = mongoose.Schema

let albumSchema = new Schema ({
  name = String 
})

let Album = mongoose.model('Album', albumSchema)

module.exports = Album 
