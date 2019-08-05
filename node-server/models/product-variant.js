var mongoose = require('mongoose');

var ProductVariantSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
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
  compare_at_price: {
	type: Number,
	default: null,
  },
  options: [ {type: String } ]
  description: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
});


var ProductVariant = mongoose.model('ProductVariant', ProductVariantSchema);
module.exports = ProductVariant;

