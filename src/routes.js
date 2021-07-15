const express = require('express');
const routes = express.Router();

const CepController = require ('./controllers/CepController');
// const ProjectsController = require ('./controllers/ProjectsController');

routes
    //cep
    // .get('/users', UserController.index)
    .post('/cep', CepController.create)
    // .put('/users/:id', UserController.update)
    // .delete('/users/:id', UserController.delete)
    // //projects
    // .get('/projects', ProjectsController.index)
    // .post('/projects', ProjectsController.create)

module.exports = routes