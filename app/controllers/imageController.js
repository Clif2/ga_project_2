'use strict'

const express = require('express')
const mongoose = require('mongoose')
const Image = require('../models/album.js')

//index
exports.all = (req, res) => {
  Image.findOne({}, (err, image) => {
    if (err) 
      res.send(err)
    res.json(image)
  })
}
  //create
  
 // u/pdate

  //delete




