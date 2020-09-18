const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  color: { type: String, required: true },
  sizes: { type: Array, required: true },
  tags: { type: Array, required: true },
  quantity: { type: Number, default: 0, required: true },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
