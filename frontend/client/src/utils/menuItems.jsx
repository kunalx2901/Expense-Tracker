import { dashboard, expense, income, viewTransaction } from "./icons"

export const menuItems = [
    {
        id : 1,
        title : "Dashboard",
        icon: dashboard,
        link : "/dashboard"
    },
    {
        id : 2,
        title : "View Transactions",
        icon: viewTransaction,
        link : "/transaction"
    },
    {
        id : 3,
        title : "Expenses",
        icon: expense,
        link : "/expenses"
    },
    {
        id : 4,
        title : "Income",
        icon: income,
        link : "/income"
    },
]

