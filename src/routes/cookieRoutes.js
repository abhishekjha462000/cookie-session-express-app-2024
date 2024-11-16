const express = require('express');

const { getCookie, getSignedCookie, signedCookiePageController, cookiePageController } = require('../controllers/cookieControllers.js');

const cookieRouter = express.Router();

cookieRouter.post('/cookie', cookiePageController);

cookieRouter.post('/signedCookie', signedCookiePageController);

cookieRouter.get('/cookie', getCookie);

cookieRouter.get('/signedCookie', getSignedCookie);

module.exports = { cookieRouter };