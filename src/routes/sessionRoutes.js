const express = require('express');
const sessionRouter = express.Router();
const { setSession, getSession } = require('../controllers/sessionControllers.js');


sessionRouter.get('/session', getSession);

sessionRouter.post('/session', setSession);

module.exports = { sessionRouter };