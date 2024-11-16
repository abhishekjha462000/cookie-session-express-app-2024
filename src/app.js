const express = require('express');
const PORT = require('./config/port.js');
const { cookieRouter } = require('./routes/cookieRoutes.js');
const cookieParser = require('cookie-parser');
const { sessionRouter } = require('./routes/sessionRoutes.js');
const expressSession = require('express-session');

const app = express();

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({ secret: 'thisisnotagoodsecret' }));
// app.use('/', cookieRouter);
app.use('/', sessionRouter);

app.listen(PORT, () => {
    console.log(`app listening @ ${PORT}`)
});