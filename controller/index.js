const express = require('express');
const router  = express.Router();
const ToDoList  = require('../data/todo');


router.get('/', (req, res) => {
    res.render('index.ejs', {todo:ToDoList})
  });

router.post('/', (req,res) => {
  console.log(req.body, '<-form contents')
  ToDoList.push(req.body.todo);
  console.log('todo did push in')
  res.redirect('/');
})

  module.exports=router;