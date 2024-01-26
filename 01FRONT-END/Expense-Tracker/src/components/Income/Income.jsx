import React from 'react'
import styled from "styled-components"
import {InnerLayout} from "../../styles/Layouts.styles.js"
import {useGlobalContext} from "../../contexts/GlobalContextProvider.jsx"

function Income() {
  
  const {addIncome} = useGlobalContext() ;

  return (
    <IncomeStyled>
        
        <InnerLayout>

            <h2>Income</h2>

            <div className='income-content'>

                <div className='form-container'>
                    
                </div>

                <div className="incomes">
                    
                </div>

            </div>

        </InnerLayout>

    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`

`;

export default Income;