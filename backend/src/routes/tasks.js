const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasks');

router.get('/', (req, res) => {
  res.json({ message: 'Fetching tasks...' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Creating a task...' });
});

router.patch('/:taskId', (req, res) => {
  res.json({ message: 'Updating status of task...' });
});

router.put('/:taskId', (req, res) => {
  res.json({ message: 'Updating a task...' });
});

router.delete('/:taskId', (req, res) => {
  res.json({ message: 'Deleting a task...' });
});

module.exports = router;
