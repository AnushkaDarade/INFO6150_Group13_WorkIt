const Todo = require("../models/todoModel");
const asyncHandler=require("express-async-handler")

const getTodo = asyncHandler(async(req,res)=>{
    const todolist =await Todo.find({user: req.user._id});
    res.json(todolist);
});

const createTodo =asyncHandler(
    async(req,res)=>{
    const { title, content, category } = req.body;

    if(!title || !content || !category){
        res.status(400)
        throw new Error("Please Fill all the Fields");
    } else{
        const todo= new Todo({user: req.user._id, title, content, category});

        const createdTodo = await todo.save();

        res.status(201).json(createdTodo);
    }
});

module.exports = { getTodo,createTodo };