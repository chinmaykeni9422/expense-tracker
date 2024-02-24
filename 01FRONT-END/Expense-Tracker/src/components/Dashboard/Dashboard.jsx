import React, { useEffect } from 'react'
import styled from "styled-components"
import {InnerLayout} from "../../styles/Layouts.styles.js"
import Chart  from '../Chart/Chart.jsx';
import {dollar} from '../../utils/Icons.jsx'
import { useGlobalContext } from '../../contexts/GlobalContextProvider.jsx';
import History from '../History/History.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = "http://localhost:8000/api/v1/";

function Dashboard() {

  const navigate = useNavigate();

  const callDashboardPage = async () => {
    try {
      const response = await axios.get(`${BASE_URL}dashboard`);
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  };

  const {totalIncome, incomes, expenses, totalExpense, totalBalance, getIncomes, getExpense} = useGlobalContext()

  useEffect(() => {
    getIncomes()
    getExpense()
  }, [])

  useEffect(() => {
    callDashboardPage();
  }, []);

  return (
    <DashboardStyled>
        
        <InnerLayout>

            <h1>All Transaction</h1>

            <div className="stats-con">

              <div className="chart-con">

                <Chart />

                <div className="amount-con">

                  <div className="income">

                    <h2>Total Income</h2>

                    <p>{dollar} {totalIncome()}</p>

                  </div>

                  <div className="expense">

                    <h2>Total Expense</h2>

                    <p>{dollar} {totalExpense()}</p>

                  </div>

                  <div className="balance">

                    <h2>Total Balance</h2>

                    <p>{dollar} {totalBalance()}</p>

                  </div>

                </div>

              </div>

              <div className="history-con">

                <History />

                <h2 className="salary-title">Min <span>Salary</span>Max</h2>

                <div className="salary-item">

                  <p>${Math.min(...incomes.map(item => item.amount))}</p>

                  <p>${Math.max(...incomes.map(item => item.amount))}</p>

                </div>

                <h2 className="salary-title">Min <span>Expense</span>Max</h2>

                <div className="salary-item">

                  <p>${Math.min(...expenses.map(item => item.amount))}</p>

                  <p>${Math.max(...expenses.map(item => item.amount))}</p>

                </div>

              </div>

            </div>

        </InnerLayout>

    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
.stats-con{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  .chart-con{
      grid-column: 1 / 4;
      height: 280px;
      .amount-con{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 1rem;
          .income, .expense{
              grid-column: span 2;
          }
          .income, .expense, .balance{
              background: #FCF6F9;
              border: 2px solid #FFFFFF;
              box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
              border-radius: 20px;
              padding: 0.5rem;
              p{
                  font-size: 2.5rem;
                  font-weight: 600;
              }
          }

          .balance{
              grid-column: 2 / 4;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              p{
                  color: var(--color-green);
                  opacity: 0.6;
                  font-size: 2.5rem;
              }
          }
      }
  }

  .history-con{
      grid-column: 4 / -1;
      h2{
          margin: 0.5rem ;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      .salary-title{
          font-size: 1.2rem;
          span{
              font-size: 1.8rem;
          }
      }
      .salary-item{
          background: #FCF6F9;
          border: 2px solid #FFFFFF;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          padding: 1rem;
          border-radius: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p{
              font-weight: 600;
              font-size: 1.6rem;
          }
      }
  }
}
`;

export default Dashboard