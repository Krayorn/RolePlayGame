var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var Chapter = require('./models/chapter')

var app = express()
var router = express.Router()

mongoose.connect('mongodb://localhost/rolePlayWeb')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*')
 res.setHeader('Access-Control-Allow-Credentials', 'true')
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
 res.setHeader('Access-Control-Allow-Headers','Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

 //and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache')
 next()
})

router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'})
})

router.route('/chapters')

  .get(function(req, res) {
    Chapter.find(function(err, data) {
      if (err) res.send(err)
      res.json(data)
    })
  })
  
  .post(function(req, res) {
    var chapter = new Chapter()

    chapter.title = req.body.title
    chapter.content = req.body.content
    chapter.save(function(err) {
      if (err) res.send(err)
      res.json({ message: 'Chapter successfully added' })
    })
  })

app.use('/', router)

module.exports = app