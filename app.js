const express = require('express');
const app = express();
const db = require('./db');

const AuthController = require('./auth/AuthCOntroller');
app.use('/api/auth', AuthController);

module.exports = app; 
