const express = require('express')
require('dotenv').config()
const cors = require('cors')
const incomeRouter = require("./routes/income")
const db = require('./db/db')

const app = express()

app.use(express.json())
app.use(cors())



app.listen(process.env.PORT, (req,res)=>{
    console.log("Backend server is running on port : ", process.env.PORT)
    db()
})

app.use("/api/v1",incomeRouter)