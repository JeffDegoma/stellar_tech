import React from 'react';
import {FormContainer} from './Form'
import MainContainer from './MainContainer'
import { useForm } from 'react-hook-form'
import Button from './Reusable/Button'
import Input from './Input'
import styled from 'styled-components'
import img from '../assets/icons/large-plant.svg'


const Step3Container = styled(FormContainer)`
    display: flex;
    flex-flow: column;
    width: 35%;

    button {
        margin-top: 2%;
        height: 3rem;
        width: 10rem;
        box-shadow: 0px 8px 17px 2px rgba(0,0,0,0.14) , 0px 3px 14px 2px rgba(0,0,0,0.12) , 0px 5px 5px -3px rgba(0,0,0,0.2) ;
    }
    @media screen and (max-width: 800px) {
    
        justify-content: space-evenly;
        max-height: 39%;
        width: 97%;
        margin-left: auto;
        align-content: flex-start;
        align-items: flex-start;
        button {
            align-self: start;
            height: 3.3rem;
            width: 10rem;
        }
    }
`

const Step3 = () => {

    const {register} = useForm()

    return (
        <MainContainer  image={img}
                        text={`Thank you`}
        >
            <Step3Container>
                <h1>Thank You.</h1>
            <Button type="submit" variant="primary" height="large" width="large"> Complete </Button>
            </Step3Container>
        </MainContainer>
    )

}

export default Step3