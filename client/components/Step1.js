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
    width: 90%;
    margin: auto;
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

`

const Step1 = () => {
    
    const {register, handleSubmit, errors, setError} = useForm()
    const history = useHistory()
    
    const onSubmit = async (data) => {
        await axios.post('http://localhost:9000/api/form/signup', data)
        .then(res =>{
            if(res.data['signup-errors']){
                res.data['signup-errors'].forEach(err => {
                    setError('email', err.message) 
                })
            } else {
                console.log(res.data)
                history.push('/step2')
            }
        })

    }
    return (
        <MainContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <NameWrapper>
                <input ref={register({
                })} 
                    type="text" 
                    name="firstName" 
                    label="First Name"
                    
                />
                {errors.firstName && <span>First Name is required</span>}
                <input ref={register({
                })} 
                    type="text" 
                    name="lastName"
                    label="Last name"
                    
                    />
                {errors.lastName && <span>Last Name is required</span>}
                </NameWrapper>
                <input ref={register({
                    required: true
                })}
                    type="email"
                    name="email"
                    label="Email"
                    
                />
                {errors.email && <span>Email provided already exists </span>}
                <input ref={register({
                    required: true
                })}
                    type="password"
                    name="password"
                    label="Password"
                    value=""
                />
                {errors.password && <span>Password is required</span>}

                <Button type="submit" variant="primary" height="large" width="large"> Next </Button>
            </Form>
        </MainContainer>
    );
};

export default Step1;