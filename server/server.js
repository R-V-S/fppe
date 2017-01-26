const express = require('express');
const app = express();
const data = require('./data.json');
const cors = require('cors');

const PORT = 4444;

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted);
  },
};

app.get('/api/news', cors(corsOptions), (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log('News Story API listening on port: ' + PORT);
  console.log('API call: http://localhost:' + PORT + '/api/news');
});

module.exports = app;
