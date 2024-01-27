import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

function Form() {

    const [inputState, setInputState] = useState({
        title: "",
        amount: "",
        date: "",
        category: "",
        description: ""
    })

    const {title, amount, data, category, description} = inputState

    //----------------------
    const handleInput = name => (e) => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = (e) => {

      e.preventDefault()

    }
    

  return (
    <formStyled onSubmit={handleSubmit}>

        <div className="input-control">
            <input 
              type="text" 
              value={title}
              name={'title'} 
              placeholder='Salary Title'
              onChange={handleInput('title')}
            />
        </div>

        <div className="input-control">
            <input 
              type="text" 
              value={amount}
              name={'amount'} 
              id={'amount'}
              placeholder='Salary amount'
              onChange={handleInput('amount')}
            />
        </div>

        <div className="input-control">
          <DatePicker 
            id='date'
            placeholderText='Enter A Date'
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              setInputState({...inputState, date: date})
            }}
          />
        </div>

        <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
        </div>

        <div className="submit-btn">
          <button>Add Income</button>
        </div>

    </formStyled>
  )
}

const formStyled = styled.form`

`;

export default Form