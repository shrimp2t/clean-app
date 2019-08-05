var mongoose = require('mongoose');

var ProductCategorySchema = new mongoose.Schema({
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



var ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema );
module.exports = ProductCategory;

