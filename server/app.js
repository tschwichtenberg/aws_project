const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path');


const app = express();

//log middleware
app.use(morgan('dev'));

//body parse middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app