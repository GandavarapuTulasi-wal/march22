var mongoose = require('mongoose');
var ForumSchema = new mongoose.Schema({
  title: { type: String, required: true, maxLength: 100, minLength: 10 },
  doc: { type: Date },
  forumbody: { type: String, required: true, maxLength: 500, minLength: 50 },
  author: { type: String, required: true, maxLength: 50, minLength: 5 },
});
module.exports = mongoose.model('Forum', ForumSchema);
