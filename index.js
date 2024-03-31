const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const database = require('../ws/src/services/database')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const loginRoute = require('./src/routes/login.routes')

app.use('/redefinirSenha', loginRoute)

app.listen(3000, () => {
    console.log('Server is up!')
})