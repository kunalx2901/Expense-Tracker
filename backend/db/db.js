const mongoose = require("mongoose")
require("dotenv").config()

async function db(){

    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected")
    }
    catch(err){
        console.log("db error: ",err)
    }
}

module.exports = db