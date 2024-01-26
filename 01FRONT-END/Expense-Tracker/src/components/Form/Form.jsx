import React, { useState } from 'react'
import styled from 'styled-components'

function Form() {

    const [inputState, setInputState] = useState({
        title: "",
        amount: "",
        date: "",
        category: "",
        description: ""
    })

    const {title, amount, data, category, description} = inputState
    

  return (
    <formStyled>
        <div className="input-control">
            <input type="text" />
        </div>
    </formStyled>
  )
}

const formStyled = styled.form`

`;

export default Form