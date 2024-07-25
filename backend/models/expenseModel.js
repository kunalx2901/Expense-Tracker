
const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema({
    title:{
        required: true,
        type:String,
        trim:true,
        maxLength:20
    },
    amount:{
        required: true,
        type:Number,
        trim:true,
        maxLength:10
    },
    description:{
        required: true,
        type:String,
        trim:true,
        maxLength:50
    },
    date:{
        required: true,
        type:String,
        trim:true,
    },
    category:{
        required: true,
        type:String,
        trim:true,
        default:"income"
    },
},{timestamps:true})


const Expense = mongoose.model("Expense", expenseSchema)

module.exports = Expense