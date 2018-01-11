'use strict'

const express = require('express')
const routes = express.Router()


// routes


// homepage 
  routes.get( '/', ( req, res ) => {
    res.render( 'index', { title: 'Express' })  
  })

module.export = routes 
