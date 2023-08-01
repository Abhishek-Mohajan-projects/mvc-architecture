const products = require("../models/products.model");
const path = require("path");

exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname + "./../views/product.html"));
};

exports.postProducts = (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const product = {
    name,
    price,
  };
  products.push(product);
  res.status(200).json(products);
};
