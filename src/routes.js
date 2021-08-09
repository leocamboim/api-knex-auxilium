const express = require('express');
const routes = express.Router();

const CepController = require ('./controllers/CepController');
const UserController = require('./controllers/UserController');
// const ProjectsController = require ('./controllers/ProjectsController');

routes
    //cep
    // .get('/users', UserController.index)
    .post('/cadastro', UserController.create)
    // .put('/users/:id', UserController.update)
    // .delete('/users/:id', UserController.delete)
    // //projects
    // .get('/projects', ProjectsController.index)
    // .post('/projects', ProjectsController.create)

module.exports = routes