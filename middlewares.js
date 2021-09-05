const middlewares = (app) => {
  const express = require('express')
  const cors = require('cors')

  /* Cross-Origin Resource Sharing
     Allows server to accept any client */
  app.use(cors({ origin: '*' }))

  /* Body Parser for JSON
     Allows server to accept JSON*/
  app.use(express.json())

  // Use of "/users" to make requests instead of "/routes/users"
  const usersRouter = require('./routes/tasks.js')
  app.use('/tasks', usersRouter)
}

module.exports = middlewares
