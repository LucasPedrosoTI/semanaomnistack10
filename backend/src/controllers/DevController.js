const axios = require('axios');
const Dev = require('../models/Dev'); 
const parseStringAsArray = require('../utils/parseStringAsArray');
//index, show, store, update, destroy

module.exports = { 
    async index (request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) { // "async" flag para esperar resposta da API
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev){
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); // "await" flag que espera a resposta para continuar o codigo

        const { name = login, avatar_url, bio } = apiResponse.data;
    
        const techsArray = parseStringAsArray(techs);
    
        const location = {
          type: 'Point',
          coordinates: [longitude, latitude],
        };
    
          dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
            })
        
          return response.json(dev);
        }}}     