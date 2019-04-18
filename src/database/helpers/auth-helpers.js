const db = require("../dbConfig");

module.exports = {
  get,
  getByUsername,
  insert,
  getById,
  update,
  remove,
  findBy
};

function get() {
  return db("users").select("id", "username", "password");
}

async function getByUsername(username) {
  return await db("users")
    .select("id", "username")
    .where({ username });
}

function findBy(username) {
  return db("users")
    .select("id", "username", "password")
    .where({ username: username })
    .first();
}

async function insert(user) {
  return await db("users")
    .insert({ username: user.username, password: user.password })
    .then(response => {
      return {
        id: response[0]
      };
    });
}
async function getById(id) {
  return await db
    .select("id", "name")
    .from("users")
    .where({ id })
    .first();
}
async function update(id, password) {
  return await db("users")
    .where({ id })
    .update({ password: password });
}
async function remove(id) {
  return await db("users")
    .where({ id })
    .del();
}
