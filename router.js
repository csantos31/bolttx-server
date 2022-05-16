const express = require('express');
const routes = express.Router();

const apiTest = require('./controller/index');
const apiLogin = require('./controller/login');
const apiRegister = require('./controller/register');

routes.get('/', apiTest.index);
routes.post('/login', apiLogin.login);
routes.post('./register', apiRegister.register)

module.exports = routes;