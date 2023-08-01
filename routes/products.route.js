const express = require("express");

const {
  getProducts,
  postProducts,
} = require("../controllers/products.controller");
const router = express.Router();

router.get("/products", getProducts);

router.post("/products", postProducts);

module.exports = router;
