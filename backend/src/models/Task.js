const db = require('../config/database');

const dbGetTasks = async () => {
  let SQLQuery = `SELECT * FROM tasks`;
  const [rows] = await db.execute(SQLQuery);

  return rows;
};

const dbCreateTask = async (task) => {
  const SQLQuery = `INSERT INTO tasks (task_name, completed, created_at, updated_at) VALUES (?, ?, ?, ?)`;
  const [rows] = await db.execute(SQLQuery, [
    task.task_name,
    task.completed,
    task.created_at,
    task.updated_at,
  ]);

  return rows.insertId;
};

const dbGetTaskById = async (taskId) => {
  const SQLQuery = `SELECT * FROM tasks WHERE id = ?`;
  const [rows] = await db.execute(SQLQuery, [taskId]);

  if (rows.length === 0) {
    const error = new Error('Task not found');
    error.status = 404;
    throw error;
  }

  return rows;
};

const dbUpdateStatusTask = async (taskId, data) => {
  const SQLQuery = `UPDATE tasks SET completed = ?, updated_at = ? WHERE id = ?`;
  return await db.execute(SQLQuery, [data.completed, data.updated_at, taskId]);
};

const dbUpdateTask = async (taskId, newTask) => {
  const SQLQuery = `UPDATE tasks SET task_name = ?, completed = ?, updated_at = ? WHERE id = ?`;
  return await db.execute(SQLQuery, [
    newTask.task_name,
    newTask.completed,
    newTask.updated_at,
    taskId,
  ]);
};

const dbDeleteTask = async (taskId) => {
  const SQLQuery = `DELETE FROM tasks WHERE id = ?`;
  return await db.execute(SQLQuery, [taskId]);
};

const dbMarkAllTasksAsCompleted = async () => {
  const SQLQuery = 'UPDATE tasks SET completed = 1, updated_at = NOW()';
  return await db.execute(SQLQuery);
};

module.exports = {
  dbGetTasks,
  dbCreateTask,
  dbGetTaskById,
  dbUpdateTask,
  dbUpdateStatusTask,
  dbMarkAllTasksAsCompleted,
  dbDeleteTask,
};
