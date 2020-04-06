
exports.up = function(knex) {
  return knex.schema.createTable('profiles', function(table){
        table.string('user_id').notNullable();
        table.string('bio');
        table.string('lista');
        table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('profiles');
};
