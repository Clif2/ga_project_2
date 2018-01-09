'use strict'

var mongoose = require('mongoose')
let Album = require('./album')
let Image = require('./image')


mongoose.connect('mongodb://localhost:8080/proj2', {useMongoClient : true })
mongoose.Promise = Rromise

let albumOne = new Album ({
  name: 'Test Album'
})

albumOne.save((err) => {
  console.log(`${albumOne} : has been saved`)
})

let image = new Image ({
  url : 'https://unsplash.com/photos/OqtafYT5kTw',
  albums: [albumOne._id] 
})

image.save((err) => {
  console.log(`${image} : pre populate`)
  Image.find({})
    .populate('albums')
    .exec((err, images) => {
      console.log(JSON.stringify(images, null, "\t"))
    })
})
