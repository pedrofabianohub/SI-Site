const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const database = require('./src/services/database');
const loginRoute = require('./src/routes/login.routes');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Rota de teste
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Rota para redefinição de senha
app.use('/redefinirSenha', loginRoute);

// Configuração do banco de dados
database.connect(); // Exemplo fictício, você precisa implementar a função connect() em database.js

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
