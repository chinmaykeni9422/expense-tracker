import React, { useEffect } from 'react'
import styled from "styled-components"
import {InnerLayout} from "../../styles/Layouts.styles.js"
import {useGlobalContext} from "../../contexts/GlobalContextProvider.jsx"
import Incomeitem from '../Incomeitem/Incomeitem.jsx';
import ExpenseForm from '../Form/ExpenseForm.jsx';

function Expenses() {
  
  const {getExpense, expenses, deleteExpense, totalExpense} = useGlobalContext() ;

  useEffect(() => {
    getExpense()
  }, [])

  return (
    <ExpenseStyled>
        
        <InnerLayout>

            <h2>Expenses</h2>

            <h2 className='total-expense'>
                    Total Expense: <span>${totalExpense()}</span>
            </h2>

            <div className='expense-content'>

                <div className='form-container'>
                    <ExpenseForm />
                </div>

                <div className="expenses">
                    <IncomeListWrapper>
                        {expenses.map((expense) => {
                        const {_id, title, amount, date, category, description, Type} = expense ;

                        return <Incomeitem 
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={Type} 
                                    category={category}
                                    indicatorColor="var(--color-red)"
                                    deleteItem={deleteExpense}
                                />
                        })}
                    </IncomeListWrapper>
                </div>

            </div>

        </InnerLayout>

    </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-expense{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 0.3rem;
        margin: 1rem 0;
        font-size: 1.5rem;
        gap: .5rem;
        span{
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--color-red);
        }
    }
    .expense-content{
        display: flex;
        gap: 2rem;
        .expenses{
            flex: 1;
        }
    }
`;

const IncomeListWrapper = styled.div`
  overflow-y: auto;      /* Enable vertical scrollbar */
  max-height: 450px;     /* Set a max height to trigger scrollbar */
`;

export default Expenses;