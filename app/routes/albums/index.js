'use strict'

// I think of this as being a controller/router pattern, rather than just a router
// but I can see why you would want to call this a router and I would say it's 
// semantics if it weren't for the MVC paradigm, where its thought of as a controller

// if you would like a pure separation between routing and controllers,
// you would take all of the callback functions that are passed as the 2nd argument
// to the express route-handling methods (.get, .post, .put. delete), and put them
// in a dedicated file.

const express = require('express')
const Album = require('../../models/album')
const Image = require('../../models/image')
const router = express.Router()

router.get( '/', ( req, res ) => {
  Album
    .find({})
    .then( albums => {
      res.render('index', { arr : albums} ) //I'd just call this albums rather than arr
    })
})


router.get('/:name', ( req, res ) => {
  Image //See comment in models
    .find()
    .then (doc => res.render('imageIndex', { images : doc}))

  //Image.find()
  //  .populate('albums', null, { name : req.params.name }) 
  //  .exec( (err, doc) => {
  //        doc.where( { albums }) res.json(doc)
  //      })
})
// })
router.post('/', (req, res) => {
  Album.create(req.body.album).  
  then( album => {
    res.redirect('/')
  })
})

router.delete('/:name', (req, res) => {
  Album.findOneAndRemove({name: req.params.name})
  .then( album => {
    res.redirect('/')
  })
})

module.exports = router
