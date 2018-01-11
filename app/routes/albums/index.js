'use strict'

const express = require('express')
const Album = require('../../models/album')
const Image = require('../../models/image')
const router = express.Router()


router.get( '/', ( req, res ) => {
  Album.find({}).
  then( albums => {
      res.render('index', { arr : albums} )
      })
})


router.get('/:name', ( req, res ) => {
  Image.find()
  .exec ((err, doc) => {
  res.render('imageIndex', { images : doc})

  //Image.find()
  //  .populate('albums', null, { name : req.params.name }) 
  //  .exec( (err, doc) => {
  //        doc.where( { albums }) res.json(doc)
  //      })
})
})
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
