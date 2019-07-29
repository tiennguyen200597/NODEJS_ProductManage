var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var productController = require('../controllers/product-controller');
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET product page. */
router.get('/app-product', productController.getProductsPage);
/* POST product page. */
router.post('/add-product', urlencodedParser, productController.insertProduct);
module.exports = router;