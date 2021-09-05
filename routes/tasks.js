const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

// Get All
router.get('/', async (req, res) => {
  try {
    const users = await Task.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get One
router.get('/:id', getTask, (req, res) => {
  res.json(res.task)
})

// Create One
router.post('/', async (req, res) => {
  const task = new Task({
    text: req.body.text,
    date: req.body.date,
    reminder: req.body.reminder,
  })
  try {
    const newTask = await task.save()
    res.status(201).json(newTask)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Update reminder
router.patch('/:id', getTask, async (req, res) => {
  res.task.reminder = req.body.reminder
  try {
    const updatedTask = await res.task.save()
    res.json(updatedTask)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Delete One
router.delete('/:id', getTask, async (req, res) => {
  try {
    await res.task.remove()
    res.json({ message: `Deleted Task with id: ${req.params.id}` })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Middleware to get User by id
async function getTask(req, res, next) {
  let task
  try {
    task = await Task.findById(req.params.id)
    if (!task) {
      return res.status(404).json({ message: `No task with id: ${req.params.id}` })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.task = task
  next() // Moves to next Middleware or Request
}

module.exports = router
