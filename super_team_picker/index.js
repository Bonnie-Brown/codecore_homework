// Require the Express Library

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

// Require Method Override Middleware

const methodOverride = require("method-override")

// Use Method Override Middlewate
// This activates the method override middleware

app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method
    }
}))


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
        title: 'Welcome to the Super Team Picker Homepage'
    })   
});


// Routes

// Cohort Router
const cohortRouter = require('./routes/cohorts');
const { render } = require('ejs');
app.use('/cohorts', cohortRouter)

// Set View Engine

app.set('view engine', 'ejs');
app.set('views', 'views');

//Server

const PORT = 5000;
const DOMAIN = 'localhost';


app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}: ${PORT}`)
});



