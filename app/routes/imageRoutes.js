'use strict'

const express = require('express')
const router = express.Router()
const imageController = require('../controllers/imageController')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:8080/proj2', {useMongoClient : true})

router.route('/')
  .get(imageController.all) 
  //  .then((err, result) => { 
  //     console.log('testing route')
 // })
//  .post 

module.exports = router 
