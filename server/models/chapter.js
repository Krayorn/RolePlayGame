const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChapterSchema = new Schema({
  title: String,
  number: Number,
  content: String
})

module.exports = mongoose.model('Chapter', ChapterSchema)
