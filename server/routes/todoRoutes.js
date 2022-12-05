const express = require('express');
const { getTodo,createTodo } = require('../controllers/todoController');

const router = express.Router();

router.route('/').get(getTodo);
router.route('/create').post(createTodo);
// router.route('/:id').get().put().delete();

module.exports=router;