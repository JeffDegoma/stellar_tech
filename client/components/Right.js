import React from 'react';
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
height: 28rem;
margin: auto;
align-items: center;
display: flex;
flex-flow: column;
justify-content: center;
width: 75%;

h3 {
    font-size: 25px;
    margin-bottom: 10%;
}

div {
    display: flex;
    flex-flow: wrap;
    flex-direction: column;
    height: 30%;
    justify-content: space-between;
    margin-top: 2rem;
    align-items: flex-start;
    align-self: flex-start;
}
@media screen and (max-width: 800px) {
    justify-content: space-between;
    width: 100%;
    height: 12rem;
    h1 {
        width: auto;
        font-size: 20px;
    }
    h3 {
        font-size: 18px;
    }
    .headline-and-image{ 
        flex-wrap: nowrap;
        justify-content: space-between;
        height: 100%;
    }
}
`

const Right = ({...props}) => {
    return (
        <RightContainer full>
            <RightDiv small>
                    <h1>{props.text}</h1>
                    <div className="headline-and-image">
                        <h3>{props.headline}</h3>
                        <img src={props.image} alt=""/>
                    </div>
            </RightDiv>
        </RightContainer>
    );
};

export default Right;