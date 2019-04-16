const db = require('../dbConfig');

module.exports = {
  get,
  insert,
  getById,
  update,
  remove
};

async function get() {
  return await db.select('id', 'username').from('users');
}

async function insert(user) {
  return await db('users')
    .insert(user)
    .then(res => res[0]);
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
