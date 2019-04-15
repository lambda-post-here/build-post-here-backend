const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findBy
};
function find() {
  return db('users').select('id', 'username', 'password');
}
function findBy(filter) {
  return db('users').where(filter);
}

// function add(user) {
//   return db('users')
//     .insert(user)
//     .then(ids => ({
//       id: ids[0]
//     }));
// }
async function add(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}
