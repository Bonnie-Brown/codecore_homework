const express = require('express');
const knex = require('../db/client');

const router = express.Router();

// Team Routes

// Index of all cohorts

router.get('/', (req, res) => {
knex('cohorts')
 .orderBy('id', 'desc')
 .then(cohorts => {
    res.render('cohorts/index', {cohorts: cohorts})
 })
})

// Show a single cohort

router.get('/:id', (req, res) => {
   knex('cohorts')
    .where('id', req.params.id)
    .first() // This will grab the first instance that matches the requirements
    .then(cohort => {
      res.render('cohorts/show', {cohort: cohort})
      })
   })

// Render New Cohort

router.get('/new', (req, res) => {
   res.render('cohorts/new', {cohort: false})
})

// Create New Cohort
router.post('/cohorts', (req, res) => {
   knex('cohorts')
   .insert({
      name: req.body.name,
      members: req.body.members,
      logoUrl: req.body.logoUrl
   })
   .returning('*')
   .then(cohorts => {
      const cohort = cohorts[0]
      res.redirect(`/cohorts/${cohort.id}`)
   })
})

module.exports = router