var mongoose = require('mongoose');

var ProductTagSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
  description: {
    type: String,
    unique: false,
    required: true,
    trim: true
  }
});



var ProductTag = mongoose.model('ProductTag', ProductTagSchema );
module.exports = ProductTag;

