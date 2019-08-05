var express = require('express');
var router = express.Router();
var Product = require('../models/product');

// GET Products
router.get('/products', function (req, res, next) {
	res.json({ product: 'Name Here' });
});

//Get product by id
router.get('/product/:id', function (req, res, next) {
	// confirm that user typed same password twice
	console.log( 'req.body', req.body );
	const productData = {
		title: 'Product server title',
		price: 69.96,
	}
	res.json({ productData });
})


//Create new product
router.post('/product', function (req, res, next) {
  // confirm that user typed same password twice
    var productData = {
		title: 'Product new name',
    }
    Product.create(productData, function (error, product) {
		res.json( product );
    });
})

//Update product id
router.put('/product/:id', function (req, res, next) {
	// confirm that user typed same password twice
	console.log( 'req.body', req.body );
	res.json({ login: '' });
})


//Delete product id
router.delete('/product/:id', function (req, res, next) {
	// confirm that user typed same password twice
	console.log( 'req.body', req.body );
	res.json({ login: '' });
})


module.exports = router;