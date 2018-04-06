const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// routes
const chapters = require('./routes/chapters')

const app = express()
const router = express.Router()

const routers = [
  chapters
]

mongoose.connect('mongodb://localhost/rolePlayWeb')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers,Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'})
})

app.use('/', ...routers)

module.exports = app
