const {Router} = require('express'); //moodulo de roteamento do EXPRESS

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/searchController')

const routes = Router(); //CRIA O "APP" ROUTER

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes; //EXPORTA O MODULO PARA SER USADO EM INDEX
