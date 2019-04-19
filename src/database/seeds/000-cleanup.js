exports.seed = function(knex) {
  return knex.schema.raw("TRUNCATE posts, users RESTART IDENTITY;");
};
