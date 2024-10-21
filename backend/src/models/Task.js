const db = require('../config/database');

const dbGetTasks = async () => {
  const SQLQuery = `SELECT * FROM tasks`;
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
    throw new Error('Task not found');
  }

  return rows;
};

const dbUpdateStatusTask = async (taskId, newStatus) => {
  const SQLQuery = `UPDATE tasks SET completed = ? WHERE id = ?`;
  return await db.execute(SQLQuery, [newStatus, taskId]);
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

module.exports = {
  dbGetTasks,
  dbCreateTask,
  dbGetTaskById,
  dbUpdateStatusTask,
  dbUpdateTask,
  dbDeleteTask,
};
