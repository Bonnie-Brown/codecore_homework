const express = require('express');
const knex = require('../db/client');

const router = express.Router();

// Routes

// Render New Cohort
router.get('/new', (req, res) => {
   res.render('cohorts/new', { cohort: false })
})


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

    let method = ""
    let quantity = ""

    if (req.query.method && req.query.quantity){

      method = req.query.method

      quantity = req.query.quantity

    }

    knex('cohorts')
     .where('id', req.params.id)
     .first() // This will grab the first instance that matches the requirements
     .then(cohort => {
       res.render('cohorts/show', {cohort, method, quantity})
      })
   })

// Delete (Destroy) a Single Post
router.delete("/:id", (req, res) => {
   knex('cohorts')
   .where('id', req.params.id)
   .del()
   .then(() => {
      res.redirect("/cohorts")
   })
})

// Create New Cohort
router.post('/', (req, res) => {
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
  }
)


// Edit a Cohort

router.get("/:id/edit", (req,res) => {
   knex("cohorts")
   .where("id", req.params.id)
   .first()
   .then(cohort => {
      res.render("cohorts/edit", {cohort: cohort});
   })

})

// Update a Cohorts

router.patch("/:id", (req, res) => {



   const updatedCohort = {
      name: req.body.name,
      members: req.body.members,
      logoUrl: req.body.logoUrl,
    
   };
   knex("cohorts")
      .where("id", req.params.id)
      .update(updatedCohort)
      .then(() => {
         res.redirect(`/cohorts/${req.params.id}`);
      });
});

module.exports = router