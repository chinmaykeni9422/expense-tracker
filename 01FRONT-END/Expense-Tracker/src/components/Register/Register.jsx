import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from '../Button/Button';
import BASE_URL from '../../SECRET';

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        fullname: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const {username, email, fullname, password} = formData

        axios.post(`${BASE_URL}register`, {
            username,
            email,
            fullname,
            password
        })
        .then((response)=> {

            const data = response.data ;
            alert(data.message) ;

        })
        .catch((error) => {

            if(error.response){
                window.alert(error.message)
            }

        })

        setFormData({
            username: '',
            email: '',
            fullname: '',
            password: '',
        })
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            <h2>Registration Form</h2>

            <InputStyled type="text" name="username" placeholder="Enter Username here..." value={formData.username} onChange={handleChange} required />

            <InputStyled type="email" name="email" placeholder="Enter Email here..." value={formData.email} onChange={handleChange} required />

            <InputStyled type="text" name="fullname" placeholder="Enter Full Name here..." value={formData.fullname} onChange={handleChange} required />

            <InputStyled type="password" name="password" placeholder="Enter Password here..." value={formData.password} onChange={handleChange} required />

            <Button 
              name={'Register'}
              bg={'linear-gradient(to right,  #FFB6C1, #d8d8d8)'}
              bPad={'15px'}
              bRad={'10px'}
              bWid={'100%'}
            />
            
            <p>Already have an account? <a href="#">Login here</a></p>
        </FormStyled>
    );
};

const FormStyled = styled.form`
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 600px;
    text-align: center;
    margin: auto;
    margin-top: 50px;

    h2 {
        color: #333;
        margin-bottom: 20px;
        font-size: 24px;
    }

    p {
        margin-top: 20px;
        color: #777;
        font-size: 14px;
    }
`;

const InputStyled = styled.input`
    width: 100%;
    padding: 15px;
    margin: 15px 0;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 6px;
    outline: none;
    font-size: 16px;

    &:focus {
        border-color: #4caf50;
    }
`;


export default RegistrationForm;