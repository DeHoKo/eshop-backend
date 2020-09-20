const express = require("express");
const Order = require("../models/orderModel");
const { isAuth } = require("../util");

const router = express.Router();

router.post("/", isAuth, async (req, res) => {
  const order = new Order({
    products: req.body.products,
    price: req.body.price,
    shipping: req.body.shipping,
  });
  const newOrder = await order.save();
  if (order) {
    return res
      .status(201)
      .send({ message: "New Order was created", data: newOrder });
  }
  return res.status(500).send({ message: "Error in creating an order" });
});

module.exports = router;
