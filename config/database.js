const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect (1mongodb://localhost/AC1')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:tom505160@fiaptecnico.vknqm.mongodb.net/AC1?retryWrites=true&w=majority')
}

module.exports = conexao