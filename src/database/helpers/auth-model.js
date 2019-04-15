const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById
};
function find() {
  return db('users').select('id', 'username', 'password');
}
function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users')
    .insert(user)
    .then(ids => ({
      id: ids[0]
    }));
}
