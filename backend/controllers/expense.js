const Expense = require("../models/expenseModel")
const createExpense = require("../inputs.js")

exports.addExpense = async(req,res)=>{
    try{
        const addedExpense = req.body
        const newExpense = createExpense.safeParse(addedExpense)
        
        if(!newExpense.success){
            res.status(400).send("Invalid inputs")
        }
        // console.log(newIncome.data.amount)
        // console.log(addedIncome.amount)
    
    if(newExpense.data.amount > 0){ 
    expense = Expense({
        title:addedExpense.title,
        amount:addedExpense.amount, 
        description:addedExpense.description,
        date:addedExpense.date,
        category:addedExpense.category
    })

    // console.log("inside addincome")

    await expense.save()
    res.status(201).send("Expense added")

    }
    else{
        res.status(400).send("Invalid amount")
    }
}
    catch(err){
        console.log(err)
    }
    }

exports.getExpenses = async(req,res)=>{
    // console.log("inside getincomes")
    
    try{
        const Expenses = await Expense.find().sort({createdAt:-1})
        console.log(Expenses)

        res.json({
            Expenses
        })
    }
    catch(err){
        res.status(500).json({
            msg:err
        })
    }
}

exports.deleteExpense = async(req,res)=>{

    const {id} = req.params
    // console.log("inside deleteincome")
    // console.log(id)
    try{
        const deleteExpense = await Expense.findByIdAndDelete(id)
        console.log(deleteExpense)

        res.json({
            msg:"Expense deleted"
        })
    }
    catch(err){
        console.log(err)
    }
}

