import React from 'react';
import {FormContainer} from './Form'
import MainContainer from './MainContainer'
import Button from './Reusable/Button'
import styled from 'styled-components'
import img from '../assets/icons/large-plant.svg'



const Step3Container = styled(FormContainer)`
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    height: 50%;

    h2 {
        display: none;
    }

    button {
        height: 3rem;
        width: 10rem;
        box-shadow: 0px 8px 17px 2px rgba(0,0,0,0.14) , 0px 3px 14px 2px rgba(0,0,0,0.12) , 0px 5px 5px -3px rgba(0,0,0,0.2) ;
    }
    @media screen and (max-width: 800px) {
    
        justify-content: space-evenly;
        height: 30vh;
        margin-left: auto;
        align-items: center;
        button {
            height: 3.3rem;
            width: 10rem;
        }
    }
`


const onClick = (e) => {
    e.preventDefault()
    window.open('https://www.stellartechsol.com/sf/', '_blank')
}
const Step3 = () => {

    return (
        <MainContainer  image={img}
                        text={`Thank You.`}
        >
            <Step3Container>
                <h1>Thank You.</h1>
            <Button type="submit" variant="primary" height="large" width="large" onClick={(e) => {onClick(e)}}> Complete </Button>
            </Step3Container>
        </MainContainer>
    )

}

export default Step3