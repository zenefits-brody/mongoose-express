const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongo connection success!');
  })
  .catch((error) => {
    console.log('Mongo connection failed!');
    console.log(error);
  });

app.set('view', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
  res.send('Woof!');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});
