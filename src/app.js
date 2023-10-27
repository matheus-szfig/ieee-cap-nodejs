require('dotenv').config();

const http = require('http');
const server = require('./config/express');

const app = http.createServer(server);

app.listen(5000, '127.0.0.1',() => {
  console.log('Server online at http://127.0.0.1:5000')
})