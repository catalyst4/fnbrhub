const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, '/')));

app.get('/maps', (req,res) => {
    res.redirect('/');
})

app.use(require('./routes/index'));
app.use(require('./routes/maps/type'));
app.use(require('./routes/maps/map'));
app.use(require('./routes/maps/submit'));
app.use(require('./routes/maps/admin/admin'));
app.use(require('./routes/maps/admin/maps'));
app.use(require('./routes/maps/admin/submissions'));

app.get('*', (req,res) => {
    res.redirect('/maps');
})

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));