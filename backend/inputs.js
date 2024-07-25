const zod = require("zod")


const createIncome = zod.object({
    title: zod.string(),
    amount:zod.number(),
    description:zod.string(),
    date:zod.string(),
    category:zod.string()
})
const createExpense = zod.object({
    title: zod.string(),
    amount:zod.number(),
    description:zod.string(),
    date:zod.string(),
    category:zod.string()
})

module.exports = createIncome , createExpense