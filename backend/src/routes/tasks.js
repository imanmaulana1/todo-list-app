const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/TaskController');

const {
  validateCreateTask,
  validatePatchTask,
} = require('../middleware/validateTask');

router.patch('/completed', tasksController.markAllTasksAsCompleted);
router.get('/', tasksController.getTasks);
router.post('/', validateCreateTask, tasksController.createTask);
router.get('/:taskId', tasksController.getTaskById);
router.patch('/:taskId', validatePatchTask, tasksController.updateStatusTask);
router.put('/:taskId', tasksController.updateTask);
router.delete('/:taskId', tasksController.deleteTask);


module.exports = router;
