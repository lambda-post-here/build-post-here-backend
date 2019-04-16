const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('../routes/auth');
const postRouter = require('../routes/sendPost');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api', postRouter);
module.exports = server;
