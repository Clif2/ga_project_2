'use strict'

const express = require('express')
const Album = require('../../models/album')
const router = express.Router()


router.get( '/', ( req, res ) => {
  Album.find({}).
  then( albums => {
      res.render('index', { arr : albums} )
      })
})


router.get( '/', ( req, res ) => {
  Album.find({}).
  then( albums => {
      res.render('index', { arr : albums} )
      })
})




router.post('/', (req, res) => {
  Album.create(req.body.album).
  then(album => {
    res.redirect('/')
  })
})

module.exports = router
