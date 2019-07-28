var express = require('express');
var router = express.Router();
var productController = require('../controllers/product-controller');
/* GET product page. */
router.get('/app-product', productController.getProductsPage);
module.exports = router;