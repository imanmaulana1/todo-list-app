import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/api/tasks/`;

const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tasks' + error.message);
  }
};

const createTask = async (payload) => {
  try {
    const response = await axios.post(API_URL, payload);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create task' + error.message);
  }
};

const updateStatusTask = async (taskId, payload) => {
  try {
    const response = await axios.patch(`${API_URL}${taskId}`, payload);
    return response.data;
  } catch (error) {
    throw new Error('Oops, something went wrong' + error.message);
  }
};

export { fetchTasks, updateStatusTask, createTask };
