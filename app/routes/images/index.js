'use strict'

const express = require('express')
const Image = require('../../models/image')
const router = express.Router()

router.get( '/', ( req, res ) => {
  // I would format like this. Mongoose has idiosyncratic formatting conventions in the docs, that aren't 'wrong'. I would pick one style use it throughout for consistency's sake
  Image
    .find({})
    .then( images => res.json( images ))
})

router.get('/:id', (req, res) => {
  Image
    .findOne({_id : req.params.id}) //mongo ids have an _ before
    .then ( image => res.render('singleImage', {url : image.url}))
})

router.put('/:id', (req, res) => { // just need to add a form to your singleImage page
  Image.findOneAndUpdate({_id : req.params.id}, req.body.note, {new : true}).
  then (image => {
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
