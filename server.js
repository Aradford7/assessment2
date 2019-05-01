const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const todoController = require('./controller/index');
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', todoController);



app.listen(3000, () => {
  console.log('app listening on port: ', 3000);
});