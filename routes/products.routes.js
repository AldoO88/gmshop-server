const { Router } = require('express');

const { getAllProducts } = require('../controllers/products.controllers');

const router = Router();

router.get('/', getAllProducts);

module.exports = router;