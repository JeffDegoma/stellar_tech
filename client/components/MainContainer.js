import React from 'react';
import FlexDiv from '../components/Reusable/flex'
import BreadCrumbs from './Reusable/Breadcrumbs'
import styled from 'styled-components'
import img from '../assets/images/stellar-technology-logo.jpg';
import {Link} from 'react-router-dom'
import Right from './Right'



export const Left = styled(FlexDiv)`
    height: 100vh;
    flex-flow: column;
    width: 55%;
    background: #fff;

    .logo {
        width: 100%;
        height: 8rem;
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
        align-self: center;
        margin-bottom: 3%;
        font-size: 26px;
    }
    h2 {
        font-weight: 500;
    }


    @media screen and (max-width: 1065px) {
        width: 100%;
    }
    @media screen and (max-width: 800px) {
        .logo {width: 100%; height: 13%; }
        height: 100%;
    }
    `
    


const MainContainer = ({children, ...props}) => {
    return (
        <>
            <Left>
                <Link to={`/`}> <div className="logo"><img src={img} /></div></Link>
                <h2>Let's create your account.</h2>
                <BreadCrumbs />
                    {children}
            </Left>
            <Right image={props.image}
                   text={props.text}
                   headline={props.headline}
            />
        </>
    );
};

export default MainContainer;