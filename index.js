const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const database = require('./src/services/database')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const loginRoute = require('./src/routes/login.routes')

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/redefinirSenha', loginRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
