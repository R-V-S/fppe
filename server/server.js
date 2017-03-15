const express = require('express');
const app = express();
const data = require('./data.json');
const cors = require('express-cors');

const PORT = 4444;


app.use(cors({
  allowedOrigins: [
    'localhost:3000'
  ]
}))

app.get('/api/news', (req, res) => {
  res.send(data);
});



app.listen(PORT, () => {
  console.log('News Story API listening on port: ' + PORT);
  console.log('API call: http://localhost:' + PORT + '/api/news');
});

module.exports = app;
