'use strict'

var mongoose = require('mongoose')
let Album = require('./album')
let Image = require('./image')

const db = require('./connection')

// init Albums and Images 

let a1 = new Album({
  name: 'Test Album 1'
})
let a2 = new Album({
  name: 'Test Album 2'
})
let a3 = new Album({
  name: 'Test Album 3'
})

let unsplash = 'https://source.unsplash.com/' // wow such read
let image1 = new Image({
  url: `${unsplash}WLUHO9A_xik`
})
let image2 = new Image({
  url: `${unsplash}VKwElWrPA`
})
let image3 = new Image({
  url: `${unsplash}EQmoufHLk`
})
let image4 = new Image({
  url: `${unsplash}QeVmJxZOv3k`
})
let image5 = new Image({
  url: `${unsplash}_UeY8aTI6d0`
})
let image6 = new Image({
  url: `${unsplash}w7ZyuGYNpRQ`
})
let image7 = new Image({
  url: `${unsplash}5Xwaj9gaR0g`
})
let image8 = new Image({
  url: `${unsplash}XJXWbfSo2f0`
})
let image9 = new Image({
  url: `${unsplash}68ZlATaVYIo`
})

let albumsArr = [a1, a2, a3]
let images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]


// populate db


//Image.remove({}).
//  then(() => {
//  images.forEach(function(image) {
//    image.save() 
//    console.log(image)
//  }) 
//})




Album
  .remove({})
  .then(() => console.log('Albums Removed'))
  .then(() => {
    Image.remove({}) 
      .then(() => console.log('Images Removed'))
      .then (() => albumsArr.forEach((a) => a.save()) )
      .then (() => {
        images.forEach((image, index) => { 
          if (index % 2 == 0) { 
            image.albums.push(a1, a3)
          }     
          else { 
            image.albums.push(a2, a3) 
          }
          image.save()
          console.log(image.url + ' added to db')
        })
      })
    })
    .then (() => {
      Image
        .find({})
        // .populate('albums')
        .then(data => {
          console.log('Images', data)
          mongoose.connection.close()
        })
    })
