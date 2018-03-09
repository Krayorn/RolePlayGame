const router = require('express').Router()

const Chapter = require('../models/chapter')

router.route('/chapters')
  .get((req, res) => {
    Chapter.find({}, (err, data) => {
      if (err) res.send(err)
      return res.send(data)
    })
  })

router.route('/chapters/:number')

  .get((req, res) => {
    Chapter.findOne({number: req.params.number}, (err, data) => {
      if (err) res.send(err)
      return res.send(data)
    })
  })

router.route('/add/chapter')

  .post(function(req, res) {
    const chapter = new Chapter()

    chapter.title = req.body.title
    chapter.content = req.body.content
    chapter.save(function(err) {
      if (err) res.send(err)
      res.json({ message: 'Chapter successfully added' })
    })
  })

module.exports = router
