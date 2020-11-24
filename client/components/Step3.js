import React from 'react';
import MainContainer from './MainContainer'
import { useForm } from 'react-hook-form'
import Form from './Form'
import Button from './Reusable/Button'


const Step3 = () => {

    const {register} = useForm()

    return (
        <MainContainer>
            <Form>
            <input ref={register({
                })} 
                    type="text" 
                    name="firstName" 
                    label="First Name"
            />
            <Button type="submit" variant="primary" height="large" width="large"> Complete </Button>
            </Form>
        </MainContainer>
    )

}

export default Step3