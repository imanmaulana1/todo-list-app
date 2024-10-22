import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/api/tasks/`;

const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchTasks };
