import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Form from './Form'
import MainContainer from './MainContainer'
import Right from './Right'
import Button from './Reusable/Button'
import styled from 'styled-components'
import regeneratorRuntime from "regenerator-runtime"
import axios from 'axios'
import Input from './Input'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import img from '../assets/icons/small-plant.svg'


const NameWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 1%;

    input {
        height: 44px;
        margin-top: 3px;
        width: 90%;
        font-size: 1.5em;
        border-radius: 10px;
        border: none;
        outline: none;
        background: #F0EFEF;
    }


    @media screen and (max-width: 800px) {
        display: inline-block;
        input {
            width: 95%;
        }
    }

`
const schema = yup.object().shape({
    email: yup
    .string()
    .required('Email is required'),
    password: yup
    .string()
    .required('Password is required')
})

const Step1 = () => {
    
    const {register, handleSubmit, errors, setError} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })
    const history = useHistory()
    
    const onSubmit = async (data) => {
        await axios.post('/api/form/signup', data ) //http://localhost:3000/api/form/signup
        .then(res =>{
            if(res.data['signup-errors']){
                res.data['signup-errors'].forEach(err => {
                    console.log(err.message)
                    setError('password', {message: err.message})
                })
            } else {
                console.log(res.data)
                history.push('/step2')
            }
        })
    }

    return (
        <MainContainer  image={img} 
                        text={`Let's create your account.`}
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <NameWrapper>
                <Input ref={register({
                })} 
                    type="text" 
                    name="firstName" 
                    label="First Name" 
                />
                {errors.firstName && <span>First Name is required</span>}
                <Input ref={register({
                })} 
                    type="text" 
                    name="lastName"
                    label="Last name"    
                />
                {errors.lastName && <span>Last Name is required</span>}
                </NameWrapper>
                <Input ref={register({
                })}
                    type="email"
                    name="email"
                    label="Email"
                    errors={errors.email} 
                />
                <Input ref={register({
                })}
                    type="password"
                    name="password"
                    label="Password"
                    errors={errors.password} 
                />
                <Button type="submit" variant="primary" height="large" width="large"> Next </Button>
            </Form>
        </MainContainer>
    );
};

export default Step1;
