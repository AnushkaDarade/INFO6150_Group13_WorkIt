const express = require('express');
const { getTodo } = require('../controllers/todoController');

const router = express.Router();

router.route('/').get(getTodo);
// router.route('/create').post()
// router.route('/:id').get().put().delete();

module.exports=router;