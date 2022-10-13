// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'super_team_picker',
      username: 'username',
      password: 'password'
    },
    migrations: {
      tableName: 'migrations',
      directory: 'migrations'
    },
    seeds: {
      directory: 'seeds'
    }
  }
};
  