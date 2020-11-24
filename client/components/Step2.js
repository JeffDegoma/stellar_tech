import React from 'react';
import MainContainer from './MainContainer'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Button from './Reusable/Button'

import Form from './Form'


const Step2 = () => {

    const {register, handleSubmit, errors} = useForm({mode: onblur})
    const history = useHistory()

    const onSubmit = async(data) => {
        history.push('/step3')
    }

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <input ref={register({
                })} 
                    type="tel" 
                    name="phone" 
                    label="phone"
            />
            <input ref={register({
                })} 
                    type="tel" 
                    name="ss" 
                    label="ss"
            />
            <input ref={register({
                })} 
                    type="text" 
                    name="firstName" 
                    label="First Name"
            />
            <Button type="submit" variant="primary" height="large" width="large"> Next </Button>
            
            </Form>
        </MainContainer>
    );
};

export default Step2;