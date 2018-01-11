'use strict'

const express = require('express')
const routes = express.Router()
const albums = require('./albums')
const images = require('./images')

// routes
routes.use('/albums', albums)
routes.use ('/images', images)
// homepage 
routes.use('/', albums )

module.exports = routes 
