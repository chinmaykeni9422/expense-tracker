import {dashboard, expenses, trend, circle, register} from '../utils/Icons.jsx'

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
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Register",
        icon: register,
        link: "/dashboard",
    }
]