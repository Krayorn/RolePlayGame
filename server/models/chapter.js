const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChapterSchema = new Schema({
  title: String,
  content: String
})

module.exports = mongoose.model('Chapter', ChapterSchema)
