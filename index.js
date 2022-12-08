const express = require('express')
const http = require('http')
const config = require('config')
const routes = require('routes')
const app = express()

require('dotenv').config

// Routing
routes(app)

// Catch 404 forwarding error
app.use((req, res, next) => {
    const error = new Error(' Not Found ')
    console.log(error)
    error.status = 404
    res.send(' Something went wrong! ')
    next(error)
})

// Render Server
app.listen(process.env.PORT ||  config.PORT, ()=> {
    console.log(`\n ${config.appName} listening on ${config.port} \n`)
})

module.exports = app