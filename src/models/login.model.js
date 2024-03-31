const mongoose = require('mongoose')

const Login = mongoose.model('Login', {
    
    senhaAtual: {
        type: String,
        required: true
    },
    novaSenha: {
        type: String,
        required: true
    },
    confirmarNovaSenha: {
        type: String,
        required: true
    }

})

module.exports = Login