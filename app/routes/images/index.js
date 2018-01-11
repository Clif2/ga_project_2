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

router.post('/', (req, res) => {
  Image.create(req.body.image).
  then(image => {
    res.redirect('/')
  })
})

module.exports = router
