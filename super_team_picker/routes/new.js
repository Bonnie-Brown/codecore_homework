const express = require('express');
const knex = require('../db/client');

const router = express.Router();

// Team Routes

// Index of all teams

router.get('/', (req, res)=>
knex('new'))