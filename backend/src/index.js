const express = require('express'); // importa o express para ter acesso as funcionalidades
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes'); // importa o modulo routes criado
const { setupWebsocket } = require('./websocket')

const app = express(); //cria a aplicação
const server = http.Server(app)


setupWebsocket(server);

//conecta ao banco de dados
mongoose.connect('mongodb+srv://lps1010:omnistack@cluster0-lidfu.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

app.use(cors ());
app.use(express.json()); //salva no express para ele entender body no tipo JSON

// Métodos HTTP: get, post, put, delete

// tipos de parametros

// Query params: request.query (filtros, ordenção, paginação...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para a criação ou alretação de um registro)

// MongoDB (Banco não-relacional)



app.use(routes); // USA O ROUTES CRIADO - deve ir dps do express.json
server.listen(3333); // define a porta de acesso do servidor

//extra criar método update (só atualiza nome, avatar, tecnologias, bio e localização ) and destroy