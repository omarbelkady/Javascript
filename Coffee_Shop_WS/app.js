// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')

const app = express() // initialize app

/*  Apps are configured with settings as shown in the conig object below.
    Options include setting views directory, static assets directory,
    and database settings. Default config settings can be seen here:
    https://docs.turbo360.co */

const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets directory
  logging: true,

  /*
    To use the Turbo 360 CMS, from the terminal run
    $ turbo extend cms
    then uncomment the lines 22-23 below: */

  // controllers: require('./controllers'),
  // db: vertex.nedb()
}

vertex.configureApp(app, config)

// import routes

//I want to use my own route import for the route
const main = require('./routes/main');

//Set the route
app.use('/', main);

module.exports = app
