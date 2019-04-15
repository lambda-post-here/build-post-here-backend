const server = require('./src/api/server');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`\n** Running on port ${PORT} ** \n`));
