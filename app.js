const servidor = require('./config/servidor')
var app = servidor.app
var porta = servidor.porta

// rota de exemplo para testar o servidor
app.get('/', (req, res) => {
    res.send('Servidor funcionando em http://localhost:' + porta)
})

app.listen(porta, () => {
    console.log('http://localhost:' + porta)
})