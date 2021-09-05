const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
  reminder: {
    type: Boolean,
    required: true,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
