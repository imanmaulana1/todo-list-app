import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/api/tasks/`;

const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tasks');
  }
};

const updateStatusTask = async (taskId, payload) => {
  const { completed, updated_at } = payload;

  try {
    const response = await axios.patch(`${API_URL}/${taskId}`, {
      completed,
      updated_at,
    });
    return response.data;
  } catch (error) {
    throw new Error('Oops, something went wrong');
  }
};

export { fetchTasks, updateStatusTask };
