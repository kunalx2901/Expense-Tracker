const mongoose = require("mongoose")
require("dotenv").config()

async function db(){

    try{
        await mongoose.connect("mongodb+srv://kunalx2901:kunal2901$@expense-tracker.sxzg71m.mongodb.net/user-income")
        console.log("MongoDB connected")
    }
    catch(err){
        console.log("db error: ",err)
    }
}

module.exports = db