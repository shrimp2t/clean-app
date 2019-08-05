var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
    required: true,
    trim: true
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
  variants: [{ type: Schema.Types.ObjectId, ref: 'ProductVariant' }],
  categories: [{ type: Schema.Types.ObjectId, ref: 'ProductCategory' }],
  tags: [{ type: Schema.Types.ObjectId, ref: 'ProductTag' }],
});

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

