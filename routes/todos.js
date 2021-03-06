var express = require('express');
var todoController = require('../controllers/todo');
var router = express.Router();
router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.delete('/:_id', todoController.deleteTodo);
module.exports = router;
