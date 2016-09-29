const express = require('express');
const app = express();
const swig = require('swig');
//const bodyParser = require('body-parser');
const path = require ('path');
const _ = require('lodash');


swig.setDefaults({cache:false});

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));

app.set('views', __dirname);
app.set('view engine', 'html');
app.engine('html', swig.renderFile);


app.use(require('body-parser').json());
app.use('/api/salesPeople', require('./routes/salesPeople.js'));
app.use('/api/regions', require('./routes/regions.js'));

app.get('/', function(req, res, next){
	res.render('index');
});

module.exports = app;