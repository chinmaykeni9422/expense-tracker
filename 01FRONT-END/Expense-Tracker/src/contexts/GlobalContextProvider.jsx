import React, { useContext, useState } from "react";
import GlobalContext from "./global.context.js";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1/";


export const GlobalContextProvider = ({children}) => {

    const [incomes, setIncomes] = useState([]) ;
    const [expense, setExpense] = useState([]) ;
    const [error, setError] = useState(null) ;

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
                                    .catch((error) => {
                                        setError(error.response.data.message)
                                    })
    }

    return (
        <GlobalContext.Provider value={{addIncome}}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(GlobalContext) ;
}