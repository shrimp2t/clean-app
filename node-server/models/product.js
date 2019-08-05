var mongoose = require('mongoose')
const Schema = mongoose.Schema
var ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
    unique: false,
    required: true,
    trim: true,
  },
  variants: [{ type: Schema.Types.ObjectId, ref: 'ProductVariant' }],
  categories: [{ type: Schema.Types.ObjectId, ref: 'ProductCategory' }],
  tags: [{ type: Schema.Types.ObjectId, ref: 'ProductTag' }],
  handle: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  published_at: { type: Date, default: Date.now },
})

var Product = mongoose.model('Product', ProductSchema)
module.exports = Product
