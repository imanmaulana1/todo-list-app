import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/api/tasks`;

const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'An error occurred');
    } else {
      throw new Error(error.message);
    }
  }
};

const createTask = async (payload) => {
  try {
    const response = await axios.post(API_URL, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const singleTask = async (taskId) => {
  try {
    const response = await axios.get(`${API_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    throw new Error('Oops, something went wrong' + error.message);
  }
};

const updateTask = async (taskId, payload) => {
  try {
    const response = await axios.put(`${API_URL}/${taskId}`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const markAllTasksAsCompleted = async () => {
  try {
    const response = await axios.patch(`${API_URL}/completed`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateStatusTask = async (taskId, payload) => {
  try {
    const response = await axios.patch(`${API_URL}/${taskId}`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  fetchTasks,
  singleTask,
  updateTask,
  updateStatusTask,
  createTask,
  deleteTask,
  markAllTasksAsCompleted,
};
