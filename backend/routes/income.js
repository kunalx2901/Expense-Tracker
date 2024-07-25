
const express = require("express")
const {addIncome} = require("../controllers/transaction")
const {getIncomes} = require("../controllers/transaction")
const {deleteIncome} = require("../controllers/transaction")
const { getExpenses, addExpense, deleteExpense } = require("../controllers/expense")

const router = express.Router()

try{
    router.post("/add-income", addIncome)
    router.get("/get-incomes", getIncomes)
    router.delete("/delete-income/:id", deleteIncome)

    // expenses routes
    router.post("/add-expense", addExpense)
    router.get("/get-expense", getExpenses)
    router.delete("/delete-expense/:id", deleteExpense)



}
catch(err){
    console.log(err)
}

module.exports = router
