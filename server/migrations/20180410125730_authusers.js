exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('authusers', function(table) {
      table.string('user_id').notNullable();
      table.string('password').notNullable();
      table.string('password_format').notNullable();
      table.string('password_salt').notNullable();
      table.string('is_approved').notNullable();
      table.string('is_locked').notNullable();
      table.timestamp('last_login');
      table.timestamp('last_changed');
      table.integer('failed_count').defaultTo(0);
      table.timestamp('create_date').defaultTo(knex.fn.now());
      table.text('comment');
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authusers');
};
