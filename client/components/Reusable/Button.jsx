import styled from 'styled-components'

const Button = styled.button`

    --props-variant-primary-background-color:  #1245A2;
    --props-variant-default-background-color: #454545;
    --props-width-large: 43%;
    --props-width-default: 5%;
    --props-height-large: 10%;
    --props-height-default: 20px;
    --props-color-primary: #fff;
    --props-color-default: #fff;
    --props-fontsize-primary: 1rem;
    --props-fontsize-default: 24px;

    


    background-color: ${props => 
        props.variant === "primary" ? 
        "var(--props-variant-primary-background-color)" : 
        "var(--props-variant-default-background-color)" };
    width: ${props => 
        props.width === "large" ? 
        "var(--props-width-large)" : 
        "var(--props-width-default)" };
    height: ${props =>
        props.height === "large" ?
        "var(--props-height-large)" : 
        "var(--props-height-default)" };
    color: ${props =>
        props.color === "primary" ?
        "var(--props-color-primary)" :
        "var(--props-color-default)" };
    font-size: ${props =>
        props.fontSize === "primary" ?
        "var(--props-fontsize-primary)" :
        "var(--props-fontsize-default)" };
    }

    border-radius: 15px;
    border: none;
    outline: none;
    cursor: pointer;
`



export default Button;