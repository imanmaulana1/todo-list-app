import { fetchTasks } from '../services/todoService';

const getTasks = async (setTasks, setError, setLoading) => {
  setLoading(true);
  try {
    const res = await fetchTasks();
    setTasks(res);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

export { getTasks };
