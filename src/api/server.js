const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('../routes/auth');
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('API ONLINE');
});

server.use('/api/auth', authRouter);

module.exports = server;
