import express from 'express'
import cors from 'cors'
import ApiRoutes from './modules/index.js'
import session from 'express-session'
import fetch from 'node-fetch'


const app = express()
const port = 3000
app.use(cors())

global.fetch = fetch;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'mysupersecret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60480 }
}))


ApiRoutes(app)


app.listen(port, () => console.log(`Server is listening on ${port}`))
