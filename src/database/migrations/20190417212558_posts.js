exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', posts => {
    posts.increments();

    posts.string('title').notNullable();
    posts.string('body');
    posts.string('image');
    posts
      .integer('userId')
      .references('id')
      .inTable('users');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};
