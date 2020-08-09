const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('dotenv').config();

const initiateMongo = require('./config/db');
const authorizeUser = require('./middleware/auth');

app.use(cookieParser());
app.use(authorizeUser);
initiateMongo();

app.use(session({
    secret: '435252354235',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
})

app.use(express.static(path.join(__dirname, '/')));

app.get('/maps', (req,res) => {
    res.redirect('/');
})

app.use(require('./routes/index'));
app.use(require('./routes/maps/type'));
app.use(require('./routes/maps/map'));
app.use(require('./routes/maps/submit'));
app.use(require('./routes/admin/admin'));
app.use(require('./routes/admin/maps'));
app.use(require('./routes/admin/submissions'));
app.use(require('./routes/admin/featured'));
app.use(require('./routes/admin/addMap'));
app.use(require('./routes/admin/editMap'));
app.use(require('./routes/admin/deleteMap'));
app.use(require('./routes/admin/login'));
app.use(require('./routes/admin/addUser'));

app.get('*', (req,res) => {
    res.redirect('/maps');
})

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));