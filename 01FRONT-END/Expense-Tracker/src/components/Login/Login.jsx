import React, { useState } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts.styles';
import Button from '../Button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = "http://localhost:8000/api/v1/";


function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('') ;
  const [password, setPassword] = useState('') ;

  const loginuser = async (e) => {

    e.preventDefault();

    axios.post(`${BASE_URL}login`, {
      email,
      password
    })
    .then((response) => {
      const data = response.data ;
      alert(data.message) ;
      navigate("/") ;
    })
    .catch((error) => {

      if(error.response){
        window.alert(error.message)
      }
      
    })
    
    setEmail('');
    setPassword('');
  }

  return (
    <LoginStyled>

      <InnerLayout>

        <LoginContainer>

          <h2>Login</h2>

          <LoginForm>

            <FormItem>
              <label htmlFor="username">Email</label>
              <input 
                type="text" 
                value={email} 
                id="Email" 
                placeholder="Enter your Email" 
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormItem>

            <FormItem>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                value={password} 
                id="password" 
                placeholder="Enter your password" 
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormItem>

            <Button 
              name={'Log in'}
              bg={'linear-gradient(to right,  #FFB6C1, #d8d8d8)'}
              bPad={'15px'}
              bRad={'10px'}
              bWid={'100%'}
              onClick={loginuser}
            />

          </LoginForm>

        </LoginContainer>

      </InnerLayout>

    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  background-color: #f4f4f4;
  min-height: 90vh;
`;

const LoginContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  margin: 50px auto;
  width: 400px;

  h2 {
    color: #333;
    margin-bottom: 20px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    color: #555;
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export default Login;
