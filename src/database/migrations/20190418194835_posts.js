const { dropTable, fkey } = require("../helpers/fkey");

exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", table => {
    table.increments();
    table.string("title").notNullable();
    table.string("body");
    table.string("image");
    fkey(table, "user_id", "users");
  });
};

exports.down = dropTable("posts");
