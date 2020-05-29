const express = require('express')
const route = express.Router()

route.get('/register', (req, res) => {
  console.log(req)
})

module.exports = route
