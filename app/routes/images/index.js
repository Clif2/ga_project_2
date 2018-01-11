'use strict'

const express = require('express')
const Image = require('../../models/image')
const router = express.Router()


router.get( '/', ( req, res ) => {
  Image.find({}).
  then( images => {
      res.json( images )
      })
})


router.get('/:id', (req, res) =>{
  Image.findOne({id : req.params.id}).
  then ( image => {
    res.render('singleImage', {url : image.url})
  })
})


router.put('/:id', (req, res) =>{
  Image.findOneAndUpdate({id : req.params.id}, req.body.note, {new : true}).
  then ( image => {
    res.redirect('/:id')
  })
})

router.post('/', (req, res) => {
  Image.create(req.body.image).
  then(image => {
    res.redirect('/')
  })
})

module.exports = router
