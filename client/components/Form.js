import React from 'react';
import styled from 'styled-components'

const FormContainer = styled.div`
    height: 56vh;
    width: 100%;
`

const FormStyle = styled.form`
    display: flex;
    width: 75%;
    margin: auto;
    flex-direction: column;
    padding-top: 20px;
    box-shadow: 0px 0px 25px #F0EFEF;
    margin-top: 5%;
    input {
        height: 43px;
        margin-top: 20px;
        font-size: 1.5em;
        width: 87%;
        margin: auto;
        border: none;
        outline: none;
        background: #F0EFEF;
        border-radius: 10px;
        margin-top: 5%;
    }
    button {
        align-self: center;
        margin-top: 2%;
    }
`
const Form = ({children, ...props}) => {
    return (
        <FormContainer>
            <FormStyle {...props}>
                {children}
            </FormStyle>
        </FormContainer>
    )
};

export default Form;