import express from 'express'
import validator from 'express-validator'
const router = express.Router()
import * as controllers from './controllers.js'

const { body } = validator

router.get('/', (req, res) => {
    res.end('Merry Christmas')
})

//POST
router.post('/signup', [
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Password must be more than 8 characters').isLength({min: 8})
], controllers.signUp)


export default router;