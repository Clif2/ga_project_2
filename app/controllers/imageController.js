'use strict'

const express = require('express')
const Image = require('../models/image')

const router = express.Router()

//index
 //exports.all = (req, res) => {
 // Image.findOne({}, (err, image) => {
//    if (err) 
//      res.send(err)
//    res.json(image)
//  })
//}
 
/* router.get('/images', (req, res) => {
  Image.
    find({}). 
    then(images => {
      res.send(images)
  })
}) */

router.get('/images', (req, res) => {
  Image.
    find({}).then( image => {
      res.json(image)
  })
    // then(results => res.json(results)).
     //catch(err => console.log(err))
    //lean().
  
})



//create
  
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
