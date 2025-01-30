const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct, getSpecificProduct, updateProduct} = require('../controllers/productController');

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getSpecificProduct);
router.put('/', updateProduct);

module.exports = router;
