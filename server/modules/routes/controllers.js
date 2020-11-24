import dotenv from 'dotenv'
import AWS_cognito from 'amazon-cognito-identity-js'
import validator from 'express-validator'

dotenv.config()

const {validationResult} = validator

const poolData = {
    UserPoolId: process.env.userPoolId,
    ClientId: process.env.clientId
}

const userPool = new AWS_cognito.CognitoUserPool(poolData)

export async function signUp(req, res) {
    const err = validationResult(req)
    if(err.errors.length){
        req.session['signup-errors'] = err.errors
    }
    
    const email = req.body.email
    const password = req.body.password
    
    // aws params
    const emailData = {
        Name: 'email',
        Value: email
    }
    
    const emailAttribue = new AWS_cognito.CognitoUserAttribute(emailData)
    userPool.signUp(email, password, [emailAttribue], null, async (err, data) => {
        req.session['signup-errors'] = []
        try {     
            if (err) {
                req.session['signup-errors'].push(err)
                console.log('session',req.session)
                res.json(req.session)
            } else {
                console.log('SIGN UP SUCCESS')
                res.json(data)
            }
        } catch (error) {
            console.error("AWS errors", error)
        }
    })
}

