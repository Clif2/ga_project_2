// prune unused files from master

'use strict'

const express = require('express')
const Album = require('../models/album')

const router = express.Router()

//get all 
router.get( '/albums', ( req, res ) => {
  Album.find({}).
  then( album => { 
      res.render('index', {album})
      })
})

//create
  
router.post( '/', ( req, res ) => {
  Album.create( req.body ). 
  then( album => {
    Album.find({}).
    then( albums => { res.json(albums) })
   })
}) 
//update
//TODO 
router.put( '/:id', ( req, res ) => {
  Album.findOneAndUpdate( { _id: req.params.id }, req.body ). 
  then( album => { 
    Album.find({}).
    then( albums => { res.json(albums) })
  })
})


  
//delete

router.delete('/:id', (req, res) => {
  Album.
    findOneAndRemove({ _id: req.params.id }, req.body). 
    then(albums => {
      Album.find({}).
      then(albums => { res.json(albums) })
    })
})

module.exports = router
