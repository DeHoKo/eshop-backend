const express = require("express");
const Product = require("../models/productModel");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.post("/", async (req, res) => {
  const product = new Product({
    category: req.body.category,
    brand: req.body.brand,
    model: req.body.model,
    image: req.body.image,
    price: req.body.price,
    color: req.body.color,
    sizes: req.body.newSizes,
    tags: req.body.newTags,
    quantity: req.body.quantity,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: "New Product was created", data: newProduct });
  }
  return res.status(500).send({ message: "Error in creating a product" });
});

module.exports = router;
