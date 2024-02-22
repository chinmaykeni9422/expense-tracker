import {dashboard, login,  expenses, trend, circle, register} from '../utils/Icons.jsx'

export const menuItems = [
    {
        id: 1,
        title: 'Home',
        icon: circle,
        link: '/Home'
    },
    {
        id: 2,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/Income",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/Expense",
    },
    {
        id: 5,
        title: "Register",
        icon: register,
        link: "/Register",
    },
    {
        id: 6,
        title: "Login",
        icon: login,
        link: "/Login",
    }
]