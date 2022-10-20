/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cohorts').del()
  await knex('cohorts').insert([
    { id: 1, name: 'The Lunch Room Bandits', members: "Mario Olson, Jose Howe, Tricia Lawson, Candice Winter, Katrina Jensen, Benjamin Charron, Wanda Fillion, Debra Lang, Patsy Denis, Peter Reeves", logoUrl: '../public/images/bandit.jpeg'}
  ]);
};
