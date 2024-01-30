import React, { useContext, useState } from "react";
import GlobalContext from "./global.context.js";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1/";


export const GlobalContextProvider = ({children}) => {

    const [incomes, setIncomes] = useState([]) ;
    const [expenses, setExpense] = useState([]) ;
    const [error, setError] = useState(null) ;

    // income methods ----

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
                                    .catch((error) => {
                                        setError(error.response.data.message)
                                    })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data.data)
    }

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes() ;
    }

    const totalIncome = () => {
        let total = 0 ;
        incomes.forEach((income) => {
            total = total + income.amount
        })
        return total ;
    }

    // expense methods

    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
                                    .catch((error) => {
                                        setError(error.response.data.message)
                                    })
        getExpense()
    }

    const getExpense = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpense(response.data.data)
    }

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpense() ;
    }

    const totalExpense = () => {
        let total = 0 ;
        expenses.forEach((Expense) => {
            total = total + Expense.amount
        })
        return total ;
    }

    const totalBalance = () => {
        return totalIncome() - totalExpense() ;
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0, 3)
    }

    return (
        <GlobalContext.Provider 
        value={{
            addIncome,
            getIncomes,
            incomes,
            expenses,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory
        }}
        >
            {children}
        </GlobalContext.Provider>  
    )
}


export const useGlobalContext = () => {
    return useContext(GlobalContext) ;
}