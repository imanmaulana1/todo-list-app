const Task = require('../models/Task');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.dbGetTasks();
    res.json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getTaskById = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.dbGetTaskById(taskId);
    res.json(task);
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ message: 'Task not found', error: error.message });
    }

    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const createTask = async (req, res) => {
  const data = {
    task_name: req.body.task_name,
    created_at: new Date(),
    updated_at: new Date(),
    completed: 0,
  };

  try {
    const insertId = await Task.dbCreateTask(data);

    res.status(201).json({
      message: 'Task created successfully',
      data: { id: insertId, ...data },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const data = {
    task_name: req.body.task_name,
    completed: req.body.completed,
    updated_at: new Date(),
  };

  try {
    await Task.dbUpdateTask(taskId, data);
    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const updateStatusTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    await Task.dbUpdateStatusTask(taskId, req.body);

    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const markAllTasksAsCompleted = async (req, res) => {
  try {
    await Task.dbMarkAllTasksAsCompleted();
    res.status(200).json({ message: 'All tasks marked as completed' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    await Task.dbDeleteTask(taskId);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  updateStatusTask,
  markAllTasksAsCompleted,
  deleteTask,
};
