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

// Require Cookie Parser

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Custom Cookie Middleware Goes Here

app.use((req, res, next) => {
    let team_count = req.cookies.team_counts;
    let number_per_team = req.cookies.number_per_team;
    let quantity = req.cookies.quantity;

    team_count = [];

    number_per_team = [];

    quantity = [];

    if (team_count){
        res.locals.team_count = team_count
    }

    if (number_per_team){
        res.locals.number_per_team = number_per_team
    }

    if (quantity){
        res.locals.quantity = quantity
    }

    next();

})


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



