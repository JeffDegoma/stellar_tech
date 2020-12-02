import React from 'react';
import small from '../assets/icons/small-plant.svg';
import Container from '../components/Reusable/container'
import styled from 'styled-components'


const RightContainer = styled(Container)`
width: 45%;
background: #1245A2;
color: white;

@media screen and (max-width: 800px) {
width: 100%;
}
`

const RightDiv = styled(Container)`
height: 53vh;
margin: auto;
align-items: center;
display: flex;
flex-flow: column;
justify-content: space-evenly;
@media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    }
`

const Right = ({...props}) => {
    return (
        <RightContainer full>
            <RightDiv full>
                    <h1>{props.text}</h1>
                    <img src={props.image} alt=""/>
            </RightDiv>
        </RightContainer>
    );
};

export default Right;