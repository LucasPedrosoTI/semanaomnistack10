const express = require('express'); // importa o express para ter acesso as funcionalidades
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express(); //cria a aplicação

mongoose.connect('mongodb+srv://lps1010:omnistack@cluster0-lidfu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); //salva no express para ele entender body no tipo JSON

// Métodos HTTP: get, post, put, delete

// tipos de parametros

// Query params: request.query (filtros, ordenção, paginação...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para a criação ou alretação de um registro)

// MongoDB (Banco não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World' });
}); // faz uma requisição e devolve uma resposta ao cliente

app.use(routes);
app.listen(3333); // define a porta de acesso do servidor

