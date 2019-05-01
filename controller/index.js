const express = require('express');
const router  = express.Router();
const ToDoList  = require('../data/todo');


router.get('/', (req, res) => {
    res.render('index.ejs', {todo: ToDoList})
  });


  module.exports=router;