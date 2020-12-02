import React from 'react';
import MainContainer from './MainContainer'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Button from './Reusable/Button'
import Input from './Input'
import Form from './Form'
import img from '../assets/icons/medium-plant.svg'


const Step2 = () => {

    const {register, handleSubmit, errors} = useForm({mode: onblur})
    const history = useHistory()

    const onSubmit = async(data) => {
        history.push('/step3')
    }

    return (
        <MainContainer image={img}
                       text={`Grow with stellar`}
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Input ref={register({
                })} 
                    type="tel" 
                    name="phone" 
                    label="Phone Number"
            />
            <Input ref={register({
                })} 
                    type="tel" 
                    name="ss" 
                    label="Social Security Number"
            />
       
            <Button type="submit" variant="primary" height="large" width="large"> Next </Button>  
            </Form>
        </MainContainer>
    );
};

export default Step2;