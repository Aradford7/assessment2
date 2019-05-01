const express = require('express');
const app = express();
const bodyParser = require('body-parser');




app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));



app.listen(3000, () => {
  console.log('app listening on port: ', 3000);
});