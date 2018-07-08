exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.table('authusers', function(table) {
      table.increments();
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('id');
};
