import React from 'react';
import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    width: 100%;
    flex-flow: column;
    align-items: center;
    @media screen and (max-width: 800px) {
        height: 75%;
    }
`

const StyledForm = styled.form`
    display: flex;
    justify-content: space-evenly;
    flex-flow: column;
    height: 110%;
    width: 75%;

    input {
        height: 43px;
        font-size: 1.5em;
        border: none;
        outline: none;
        background: #F0EFEF;
        border-radius: 10px;
    }
    // override default button styles
    button {
        margin-top: 2%;
        height: 3rem;
        width: 10rem;
        box-shadow: 0px 8px 17px 2px rgba(0,0,0,0.14) , 0px 3px 14px 2px rgba(0,0,0,0.12) , 0px 5px 5px -3px rgba(0,0,0,0.2) ;
    }
    p {
        align-self: flex-start;
        margin-left: 0rem;
        font-size: 11px;
        line-height: 15.2px;
        width: 16rem;
        font-weight: 200;
        color: #868484;
        margin-top: 1rem;
    }  

    @media screen and (max-width: 800px) {
        height: 70vh;
        margin: 0%;
        justify-content: space-evenly; 
        box-shadow: none; 
        
    }
`

export const Footer = styled.div`
    height: 4rem;
`
const Form = ({children, ...props}) => {
    return (
        <FormContainer>
            <StyledForm {...props}>
                {children}
            <Footer>
                <p>We take your data privacy very seriously and we will not share your information with anyone else. By signing up you agree to our Terms & Conditions and Privacy Policy. </p>
            </Footer>
            </StyledForm>
        </FormContainer>
    )
};

export default Form;