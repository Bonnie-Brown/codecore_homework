const express = require('express');
const knex = require('../db/client');

const router = express.Router();

// Team Routes

// Index of all cohorts

router.get('/', (req, res) => {
knex('cohorts')
 .orderBy('id', 'asc')
 .then(cohorts => {
    res.render('cohorts/index', {cohorts: cohorts})
 })
})

module.exports = router