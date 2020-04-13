const mongoose = require('mongoose');
const Product = require('../models/product');

const products = [
  {
    Manufacturer : 'Apple',
    Model : 'iPhone 11',
    Price: 19.99,
    Color: "Black",
    Storage: "256",
    ImageURL : "/Apple/1.jpg"
  },
  {
    Manufacturer : 'Google',
    Model : 'Pixel Xl',
    Price: 9.99,
    Color: "Black",
    Storage: "128",
    ImageURL : "/Google/1.jpg"
  },
  {
    Manufacturer : 'Samsung',
    Model : 'Galaxy S10',
    Price: 12.99,
    Color: "Blue",
    Storage: "256",
    ImageURL: "/Samsung/1.jpg"
  },    
];

const seedProducts = () => {
  Product.remove({}, (err) => {
    if(err) {
      console.log(err);
    }
    console.log('PRODUCTS REMOVED');
    products.forEach((product) => {
      Product.create(product, (err, createdProduct) => {
        if(err) {
          console.log(err);
        } else {
          console.log('PRODUCT CREATED');
          createdProduct.save();
        }
      })
    })
  })
}

module.exports = seedProducts;
