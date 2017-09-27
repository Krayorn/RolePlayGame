var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ChapterSchema = new Schema({
  title: String,
  content: String
 })

module.exports = mongoose.model('Chapter', ChapterSchema)