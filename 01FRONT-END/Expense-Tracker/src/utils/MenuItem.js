import {dashboard, expenses, transactions, trend, circle} from '../utils/Icons.jsx'

export const menuItems = [
    {
        id: 1,
        title: 'Home',
        icon: circle,
        link: '/dashboard'
    },
    {
        id: 2,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 3,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
]