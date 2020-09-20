const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: { type: Array, required: true },
  price: { type: Number, default: 0, required: true },
  shipping: { type: Object, default: {}, required: true },
});

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
