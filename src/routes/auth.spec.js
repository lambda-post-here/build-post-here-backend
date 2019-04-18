const request = require('supertest');
const api = require('../server');
const Users = require('../database/helpers/auth-helpers');
const AUTH_API_URL = '/api/auth';

const user = {
  username: 'IAmATestUser',
  password: 'password'
};
afterEach(async () => {
  Users.truncate();
});
beforeEach(async () => {
  Users.truncate();
});
async function createUser() {
  return await request(api)
    .post(AUTH_API_URL + '/register')
    .send({ username: user.username, password: user.password });
}

describe('Auth Router', () => {
  describe('Register Route', () => {
    it('should return 201 on success', async () => {
      const res = await request(api)
        .post(AUTH_API_URL + '/register')
        .send(user);
      expect(res.status).toEqual(201);
    });

    it('should return 500 on fail if a user is already registered)', async () => {
      await createUser();
      const res = await createUser();
      expect(res.status).toEqual(500);
    });
    it('should return 400 on fail (Please enter a username and password to register.)', async () => {
      const res = await request(api)
        .post(AUTH_API_URL + '/register')
        .send({ username: user.username, password: '' });
      expect(res.status).toEqual(400);
    });
    it('should return message on success', async () => {
      const res = await request(api)
        .post(AUTH_API_URL + '/register')
        .send(user);
      expect(res.body.message).toEqual('Registration Successful');
    });
  });
  describe('Login Route', () => {
    it('should return a token on success', async () => {
      await createUser();
      const res = await request(api)
        .post(AUTH_API_URL + '/login')
        .send(user);
      expect(
        /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(
          res.body.token
        )
      ).toBe(true);
    });
  });
});
