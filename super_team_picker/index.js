// Require the Express Library

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

// Require Cookie Parser

const cookieParser = require('cookie-parser')
app.use(cookieParser())

// Custom Cookie Middleware Goes Here

// Require Path for express.static

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Require Morgan (Logging Middleware)

const logger = require('morgan');
app.use(logger('dev'));

// Routers

// Home 

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home'
    })
});

// Router
const cohortRouter = require('./routes/cohorts')
app.use('/cohorts', cohortRouter)

// Set View Engine

app.set('view engine', 'ejs');
app.set('views', 'views');

//Server

const PORT = 3000;
const DOMAIN = 'localhost';


app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}: ${PORT}`)
});



