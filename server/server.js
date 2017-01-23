const express = require('express')
const app = express()
const data = require('./data.json')

const PORT = 4444

app.get('/api/news', (req, res) => {
  res.send(data)
})

app.listen(4444, () => {
  console.log('News Story API listening on port: ' + PORT)
})


module.exports = app


