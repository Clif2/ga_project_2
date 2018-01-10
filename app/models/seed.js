'use strict'

var mongoose = require('mongoose')
let Album = require('./album')
let Image = require('./image')

const db = require('./connection')

// init Albums and Images 

let a1 = new Album ({ name: 'Test Album 1' })
let a2 = new Album ({ name: 'Test Album 2' })
let a3 = new Album ({ name: 'Test Album 3' })

let unsplash = 'https://source.unsplash.com/'
let img1 = new Image ({ url : `${unsplash}WLUHO9A_xik` })
let img2 = new Image ({ url : `${unsplash}VKwElWrPA` })
let img3 = new Image ({ url : `${unsplash}EQmoufHLk` })
let img4 = new Image ({ url : `${unsplash}QeVmJxZOv3k` })
let img5 = new Image ({ url : `${unsplash}_UeY8aTI6d0` })
let img6 = new Image ({ url : `${unsplash}w7ZyuGYNpRQ` })
let img7 = new Image ({ url : `${unsplash}5Xwaj9gaR0g` })
let img8 = new Image ({ url : `${unsplash}XJXWbfSo2f0` })
let img9 = new Image ({ url : `${unsplash}68ZlATaVYIo` })

let albumsArr = [ a1, a2, a3 ]
let imgs = [ img1, img2, img3, img4, img5, img6, img7, img8, img9 ]


// populate db


//Image.remove({}).
//  then(() => {
//  imgs.forEach(function(img) {
//    img.save() 
//    console.log(img)
//  }) 
//})



  Album
  .remove({})
  .then(() => {
    console.log('Albums Removed')
  })
  .then(() => {
    Image.remove({}) 
      .then(() => {
        console.log('Images Removed')
      })
      .then (() => { albumsArr.forEach((a) => a.save()) } )
      .then (() => {
        imgs.forEach((img, index) => { 
          if (index % 2 == 0) { 
            img.albums.push(a1, a3)
            img.save()
            console.log(img.url + 'added to db')
          }     
          else { 
            img.albums.push(a2, a3) 
            img.save() 
            console.log(img.url+ 'added to db')
          }
        })
      })
  })
  .then (() => {
     Image.find({})
      .populate('albums')
 })


