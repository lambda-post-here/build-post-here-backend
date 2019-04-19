exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("posts")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          title: "test post title",
          body: "test post body",
          image: "image",
          user_id: 1
        }
      ]);
    });
};
