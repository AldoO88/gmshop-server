const express = require("express");
const router = express.Router();
const productRouter = require('./products.routes');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use('/products', productRouter);

module.exports = router;
