const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const BookController = require('./controllers/BookController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/books', BookController.index);
routes.post('/books', BookController.create);

routes.post('/session', SessionController.create);

routes.get('/profile', ProfileController.index);

module.exports = routes;