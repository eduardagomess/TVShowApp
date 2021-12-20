const express = require('express')
const series = require('./src/data/series.json')
const server = express()

server.get('/series', (req, res) => {
  return res.json(series)
})

server.listen(8080, () => {
  console.log('Server running on port 8080')
})
