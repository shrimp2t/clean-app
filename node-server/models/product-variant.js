var mongoose = require('mongoose');

var ProductVariantSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
  sku: {
    type: String,
  },
  price: {
	type: Number,
  },
  description: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
});


var ProductVariant = mongoose.model('ProductVariant', ProductVariantSchema);
module.exports = ProductVariant;

