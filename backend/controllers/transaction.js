const Income = require("../models/incomeModel")
const createIncome = require("../inputs.js")

exports.addIncome = async(req,res)=>{
    try{
        const addedIncome = req.body
        const newIncome = createIncome.safeParse(addedIncome)
        
        if(!newIncome.success){
            res.status(400).send("Invalid inputs")
        }
        // console.log(newIncome.data.amount)
        // console.log(addedIncome.amount)
    
    if(newIncome.data.amount > 0){ 
    income = Income({
        title:addedIncome.title,
        amount:addedIncome.amount, 
        description:addedIncome.description,
        date:addedIncome.date,
        category:addedIncome.category
    })

    // console.log("inside addincome")

    await income.save()
    res.status(201).send("Income added")

    }
    else{
        res.status(400).send("Invalid amount")
    }
}
    catch(err){
        console.log(err)
    }
    }

exports.getIncomes = async(req,res)=>{
    // console.log("inside getincomes")
    
    try{
        const incomes = await Income.find().sort({createdAt:-1})
        console.log(incomes)

        res.json({
            incomes
        })
    }
    catch(err){
        res.status(500).json({
            msg:err
        })
    }
}

exports.deleteIncome = async(req,res)=>{

    const {id} = req.params
    // console.log("inside deleteincome")
    // console.log(id)
    try{
        const deleteIncome = await Income.findByIdAndDelete(id)
        console.log(deleteIncome)

        res.json({
            msg:"Income deleted"
        })
    }
    catch(err){
        console.log(err)
    }
}

