const db = require('../dbConfig');

module.exports = {
  get,
  getByUsername,
  insert,
  getById,
  update,
  remove
};

async function get() {
  return await db.select('id', 'username').from('users');
}

async function getByUsername(username) {
  return await db
    .select('*')
    .from('users')
    .where({ username })
    .first();
}

async function insert(user) {
  return await db('users')
    .insert({ username: user.username, password: user.password })
    .then(response => {
      return {
        id: response[0]
      };
    });
}
async function getById(id) {
  return await db
    .select('id', 'name')
    .from('users')
    .where({ id })
    .first();
}
async function update(id, password) {
  return await db('users')
    .where({ id })
    .update(password);
}
async function remove(id) {
  return await db('resources')
    .where({ id })
    .del();
}
