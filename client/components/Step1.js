import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Form from './Form'
import MainContainer from './MainContainer'
import Button from './Reusable/Button'
import styled from 'styled-components'
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'


const NameWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-content: center;
    input {
        height: 42px;
        margin-top: 20px;
        font-size: 1.5em;
        width: 46%;
        border-radius: 10px;
        border: none;
        outline: none;
        background: #F0EFEF;
    }
    span:nth-child(1) {
        position: absolute;
        left: 1%;
        font-size: 12px;
        font-weight: 400;
    }

    span:nth-child(3) {
        position: absolute;
        right: 36%;
        font-size: 12px;
        font-weight: 400;
    } 

`

const Step1 = () => {
    
    const {register, handleSubmit, errors, setError} = useForm()
    const history = useHistory()
    
    const onSubmit = async (data) => {
        // await axios.post('http://localhost:3000/api/form/signup', data, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, })
        // .then(res =>{
        //     if(res.data['signup-errors']){
        //         res.data['signup-errors'].forEach(err => {
        //             setError('email', err.message) 
        //         })
        //     } else {
        //         console.log(res.data)
                history.push('/step2')
            // }
        // })

    }
    return (
        <MainContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <NameWrapper>
                <span>First name</span>
                <input ref={register({
                })} 
                    type="text" 
                    name="firstName" 
                    label="First Name"
                    
                />
                {errors.firstName && <span>First Name is required</span>}
                <span>Last name</span>
                <input ref={register({
                })} 
                type="text" 
                name="lastName"
                label="Last name"
                
                />
                {errors.lastName && <span>Last Name is required</span>}
                </NameWrapper>
                <span>Email name</span>
                <input ref={register({
                    required: true
                })}
                    type="email"
                    name="email"
                    label="Email"
                    
                />
                {errors.email && <span>Email provided already exists </span>}
                <span>
                <span>Password</span>&nbsp; &nbsp;
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokejoin="round"/><path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </span>
                <input ref={register({
                    required: true
                })}
                    type="password"
                    name="password"
                    label="Password"
                />
                {errors.password && <span>Password is required</span>}

                <Button type="submit" variant="primary" height="large" width="large"> Next </Button>
            </Form>
        </MainContainer>
    );
};

export default Step1;