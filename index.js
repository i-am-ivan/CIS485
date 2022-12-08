const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 3000

// Parsing middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Start files
app.use(express.static('public'))

// Templating engine


// Render Server
app.listen(port, ()=> {
    console.log(`\n Listening on PORT ${port} \n`)
})