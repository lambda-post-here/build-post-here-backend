const request = require('supertest');
const api = require('../server');
const generateToken = require('../middleware/generateToken');
const Users = require('../database/helpers/auth-helpers');
const AUTH_API_URL = '/api/auth';
