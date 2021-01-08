const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose
  .connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongo connection success!');
  })
  .catch((error) => {
    console.log('Mongo connection failed!');
    console.log(error);
  });

Product.insertMany([
  { name: 'Ruby Grapefruit', price: 1.99, category: 'fruit' },
  { name: 'Organic Goddess Melon', price: 4.99, category: 'fruit' },
  { name: 'Organic Mini Seedless Watermelon', price: 3.99, category: 'fruit' },
  { name: 'Organic Celery', price: 1.5, category: 'vegetable' },
  { name: 'Chocolate Whole Milk', price: 2.69, category: 'dairy' },
])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
