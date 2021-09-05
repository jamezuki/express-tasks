const express = require('express')
const app = express()
const dbConnect = require('./dbConnect')
const middlewares = require('./middlewares')

// Load .env variables
// require('dotenv').config()

dbConnect(process.env.DB)
middlewares(app)

// PORT environment variable is used by Heroku
const PORT = process.env.PORT || 3000

// Server Start
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
