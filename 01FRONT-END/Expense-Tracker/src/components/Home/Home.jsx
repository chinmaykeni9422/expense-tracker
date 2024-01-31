import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts.styles';

function Home() {
  return (
    <HomeStyled>
      <InnerLayout>
        <HeaderText>
          <h2>Expense Tracker</h2>
          <p>Your Financial Companion</p>
        </HeaderText>
        <IntroText>
          <p>
            Simplify your finances with our user-friendly Expense Tracker. Track
            your income, manage expenses, and make informed decisions effortlessly.
          </p>
        </IntroText>
      </InnerLayout>
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  text-align: center;
  padding: 4rem 0;
  height: 100vh;
  background: linear-gradient(to right,  #FF4081, #333333); /* Gradient background */
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeaderText = styled.div`
  h2 {
    font-size: 3rem;
    color: #fff; /* White text color */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: #f8f9fa; /* Light gray text color */
  }
`;

const IntroText = styled.div`
  max-width: 600px;
  margin: 0 auto;

  p {
    font-size: 1.5rem;
    color: #fff; /* White text color */
    line-height: 1.6;
    margin-top: 1.5rem;
  }
`;



export default Home;

