var Product =require('../models/Product')
//var queryAllproduct = Product.find({});
module.exports.getProductsPage = function (req, res, next) { 
    // const products=Product.find({});
    // res.render('app-product',{products:products});
    Product.find({}, function(err, products) {
        res.render('app-product', { title: 'Express', products: products });
    });
};
module.exports.insertProduct = function (req, res, next) {     
    // console.log(req.body);
    // Create an instance of model SomeModel
var awesome_instance = new Product({ name: req.body.productname,price:req.body.productprice,decription:req.body.productdescription});

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
  console.log('saved')
//   res.send('welcome, ' + req.body.productname+req.body.productprice+req.body.productdescription);
    res.redirect('/app-product');
    //console.log(queryAllproduct);
});
};