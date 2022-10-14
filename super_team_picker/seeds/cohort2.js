/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cohorts').del()
  await knex('cohorts').insert([
    { id: 1, name: 'The Lunch Room Bandits', members: "Mario Olson, Jose Howe, Tricia Lawson, Candice Winter, Katrina Jensen, Benjamin Charron, Wanda Fillion, Debra Lang, Patsy Denis, Peter Reeves", logoUrl: '../public/images/bandit.jpeg'},
    { id: 2, name: 'The Office Heros', members: 'Dustin Robichaud, Lance MacDonald, Gaetan Brassard, Eileen Belisle, Nicolas Griffin, Jen Lessard, Carey Cummings, Marguerite FitzPatrick, Lionel Donnelly, Alice Barnes', logoUrl: '../public/images/heros.jpeg'}
  ]);
};
