const app = require('express')();

app.get('/', (req, res, next) => {
  res.send('Hello world');
})

module.exports = app;