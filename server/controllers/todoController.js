const Todo = require("../models/todoModel");
const asyncHandler=require("express-async-handler")

const getTodo = asyncHandler(async(req,res)=>{
    const todolist =await Todo.find()
    res.json(todolist);
});

module.exports = { getTodo };