const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    nome: String,
    sobrenome: String,
    email: String,
    mensagem: String,
    enviado: { type: Date, default: Date.now }
})

const mensagem = mongoose.model('mensagem', modelo)

module.exports = mensagem