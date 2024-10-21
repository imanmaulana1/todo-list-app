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

const getTaskById = async (req, res) => {};

const createTask = async (req, res) => {
  const data = {
    task_name: req.body.task,
    completed: 0,
    created_at: new Date(),
    updated_at: new Date(),
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

const updateTask = async (req, res) => {};

const updateStatusTask = async (req, res) => {
  const { taskId } = req.params;
  const { completed } = req.body;

  try {
    await Task.dbUpdateStatusTask(taskId, completed);

    res.status(200).json({ message: 'Task updated successfully' });
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
  deleteTask,
};
