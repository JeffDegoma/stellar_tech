import React, { forwardRef } from 'react';
import styled from 'styled-components'

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    overflow: hidden;
    display: inline-block;

    span {
        margin-right: 3%;
        margin-bottom: 1%;
        font-size: 14px;
    }
    .error {
        font-size: 12px;
        color: red;
    }
    input {
        margin-bottom: 3%;
        width: 95%;
    }
    
    @media screen and (max-width: 800px) {
        input {
            width: 100%;
        }
    }
    
`

const Input = forwardRef((props, ref) => {
    return (
        <InputContainer>
            <span>{props.label}</span>
            {props.errors && <span className="error">{props.errors.message}</span>}
            <input  
                ref={ref}
                {...props}
            />
        </InputContainer>
    );
});

export default Input;