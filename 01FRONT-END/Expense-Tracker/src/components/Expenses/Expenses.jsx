import React from 'react'
import styled from "styled-components"
import {InnerLayout} from "../../styles/Layouts.styles.js"

function Expenses() {
  return (
    <ExpensesStyled>

        <InnerLayout>
            Expenses
        </InnerLayout>
    
    </ExpensesStyled>
  )
}

const ExpensesStyled = styled.div`
    
`;

export default Expenses;