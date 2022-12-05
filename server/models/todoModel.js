// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const todoSchema = Schema(
    {
        title:{
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        user:{
            type: Schema.Types.ObjectId,
            required: true,
            ref: "users"
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Todo", todoSchema);