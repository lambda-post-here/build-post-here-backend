const { fkey } = require("../helpers/fkey");
exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", posts => {
    posts.increments();

    posts.string("title").notNullable();
    posts.string("body");
    posts.string("image");
    fkey(table, "user_id", "users");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("posts");
};
