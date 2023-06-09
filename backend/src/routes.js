const express = require('express');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const connection = require('./database/connection');


const routes = express.Router();

routes.post('/sessions',SessionController.create);
routes.get('/ongs', ongController.index);
routes.post('/ongs',ongController.create);
routes.get('/profile',ProfileController.index)
routes.post('/incidents',incidentController.create);
routes.get('/incidents',incidentController.index);
routes.delete('/incidents/:id',incidentController.delete);
module.exports = routes; 