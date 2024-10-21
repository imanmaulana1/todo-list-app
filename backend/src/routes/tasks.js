const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');
const validateTask = require('../middleware/validateTask');

router.get('/', tasksController.getTasks);

router.post('/', validateTask, tasksController.createTask);

router.patch('/:taskId', tasksController.updateStatusTask);

router.put('/:taskId', tasksController.updateTask);

router.delete('/:taskId', tasksController.deleteTask);

module.exports = router;
