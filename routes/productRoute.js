const express = require("express");
const Product = require("../models/productModel");
const { isAdmin, isAuth } = require("../util");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  res.send(product);
});

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.post("/", isAuth, isAdmin, async (req, res) => {
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

router.put("/:id", isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.category = req.body.category;
    product.brand = req.body.brand;
    product.model = req.body.model;
    product.image = req.body.image;
    product.price = req.body.price;
    product.color = req.body.color;
    product.sizes = req.body.newSizes;
    product.tags = req.body.newTags;
    product.quantity = req.body.quantity;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: "Product was updated", data: updatedProduct });
    }
  }

  return res.status(500).send({ message: "Error in updating a product" });
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    await product.remove();
    res.send({ message: "Product deleted" });
  } else {
    res.send("Error");
  }
});

module.exports = router;
