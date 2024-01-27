import React, { useEffect } from 'react'
import styled from "styled-components"
import {InnerLayout} from "../../styles/Layouts.styles.js"
import {useGlobalContext} from "../../contexts/GlobalContextProvider.jsx"
import Form from '../Form/Form.jsx';
import Incomeitem from '../Incomeitem/Incomeitem.jsx';

function Income() {
  
  const {addIncome, getIncomes, incomes} = useGlobalContext() ;

  useEffect(() => {
    getIncomes()
  }, [])

  return (
    <IncomeStyled>
        
        <InnerLayout>

            <h2>Income</h2>

            <div className='income-content'>

                <div className='form-container'>
                    <Form />
                </div>

                <div className="incomes">
                    {incomes.map((income) => {
                      const {_id, title, amount, date, category, description} = income ;
                      return <Incomeitem />
                    })}
                </div>

            </div>

        </InnerLayout>

    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`

`;

export default Income;