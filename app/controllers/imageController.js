'use strict'

const express = require('express')
const Image = require('../models/image')

const router = express.Router()

//get all 
router.get( '/images', ( req, res ) => {
  Image.
    find({}).
      then( image => {
        res.json( image )
      })
})

//create
  
router.post( '/', ( req, res ) => {
  Image.create( req.body ). 
    then( image => {
      Image.find({}).
       then( images => {
          res.json(images)
     })
  })
})

 // u/pdate

  //delete
 


router.delete('/:id', (req, res) => {
  Image.
    findOneAndRemove({ _id: req.params.id }, req.body). 
    then(images => {
    Image.find({}).
      then(images => {
      res.json(images)
      })
    })
}) 

module.exports = router
