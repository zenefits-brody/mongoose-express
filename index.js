const express = require('express');
const app = express();
const path = require('path');

app.set('view', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('App is listening on port 3000.');
});
