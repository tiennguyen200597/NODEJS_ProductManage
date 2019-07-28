module.exports.getProductsPage = function (req, res, next) { 
    res.render('app-product', { title: 'Express' });
};