const db = require('../dbConfig');

module.exports = {
  getById,
  insert
};

async function getById(id) {
  return await db
    .select('id', 'name')
    .from('users')
    .where({ id })
    .first();
}
async function insert(post, userID) {
  return await db('posts')
    .insert({
      title: post.title,
      body: post.body,
      image: post.image,
      userId: userID
    })
    .then(response => {
      return {
        id: response[0]
      };
    });
}
