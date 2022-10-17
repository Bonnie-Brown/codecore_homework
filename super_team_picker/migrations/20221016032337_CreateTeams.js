const { Template } = require("ejs");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('teams', table => {
        table.increments("id");
        table.integer('cohort').references("id").inTable("cohorts");
        table.integer("team_number");
        table.text("teammates");
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('teams')
  
};
