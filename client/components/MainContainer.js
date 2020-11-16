import React from 'react';
import FlexDiv from '../components/Reusable/flex'
import BreadCrumbs from './Reusable/Breadcrumbs'
import styled from 'styled-components'


const Background = styled(FlexDiv)`
    width: 100%;
    background: #1245A2;

    @media screen and (max-width: 835px) {
        height: 100vh;
       
    }
`

const Left = styled(FlexDiv)`
    height: 100vh;
    width: 55%;
    background: #fff;
`

const MainContainer = ({children}) => {
    return (
        <Background>
            <Left>
                <BreadCrumbs />
                {children}
            </Left>
        </Background>
    );
};

export default MainContainer;