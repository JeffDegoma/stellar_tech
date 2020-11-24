import React from 'react';
import styled from 'styled-components'

const FormContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    height: 50vh;
    width: 100%;
    flex-flow: column;
    align-items: center;

    p {
        align-self: flex-start;
        margin-left: 8%;
        font-size: 11px;
        line-height: 15.2px;
        width: 40%;
        font-weight: 200;
        color: #868484;
        margin-top: 1rem;
    }

    @media screen and (max-width: 1018px) {
            height: 90%;
            display: flex;
            justify-content: space-evenly;        
    }
`

const StyledForm = styled.form`

    display: flex;
    justify-content: space-evenly;
    flex-flow: column;
    width: 85%;
    height: 90%;
    
    input {
        height: 43px;
        font-size: 1.5em;
        border: none;
        outline: none;
        background: #F0EFEF;
        border-radius: 10px;
    }
    button {
        margin-top: 4%;
        height: 3rem;
        width: 8rem;
        box-shadow: 0px 8px 17px 2px rgba(0,0,0,0.14) , 0px 3px 14px 2px rgba(0,0,0,0.12) , 0px 5px 5px -3px rgba(0,0,0,0.2) ;
    }

    

    @media screen and (max-width: 800px) {
        width: 90%;
        height: 65vh;
        margin: 0%;
        justify-content: space-evenly; 
        box-shadow: none;
    }

`

const Footer = styled.div`
    height: 4rem;
`
const Form = ({children, ...props}) => {
    return (
        <FormContainer>
            <StyledForm {...props}>
                {children}
            </StyledForm>
        <Footer><p>We take your data privacy very seriously and we will not share your information with anyone else. By signing up you agree to our Terms & Conditions and Privacy Policy. </p></Footer>
        </FormContainer>
    )
};

export default Form;