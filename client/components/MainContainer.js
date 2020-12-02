import React from 'react';
import FlexDiv from '../components/Reusable/flex'
import BreadCrumbs from './Reusable/Breadcrumbs'
import styled from 'styled-components'
import img from '../assets/images/stellar-technology-logo.jpg';
import {Link} from 'react-router-dom'
import Right from './Right'



const Left = styled(FlexDiv)`
    height: 100vh;
    width: 55%;
    background: #fff;

    .logo {
        width: 100%;
        height: 5rem;
    }
    .logo > img {
        width: 19rem;
    }

    .left_headline {
        width: 100%;
        justify-content: center;
        display: flex;
        margin-bottom: 5%;
    }
    h2 {
        font-weight: 500;
    }


    @media screen and (max-width: 1065px) {
        width: 100%;
    }
    @media screen and (max-width: 800px) {
        .logo {width: 100%; height: 13%; }
        height: 85vh;
    }
    `
    


const MainContainer = ({children, ...props}) => {
    return (
        <>
            <Left>
                <Link to={`/`}> <div className="logo"><img src={img} /></div></Link>
                <BreadCrumbs />
                    {children}
            </Left>
            <Right image={props.image}
                   text={props.text}
            />
        </>
    );
};

export default MainContainer;