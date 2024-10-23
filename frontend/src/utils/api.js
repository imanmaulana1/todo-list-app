import { fetchTasks } from '../services/todoService';
import { toast } from 'react-toastify';

const getTasks = async (setTasks, setError, setLoading) => {
  setLoading(true);
  try {
    const res = await fetchTasks();
    setTasks(res);
  } catch (error) {
    setError(error);
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};

export { getTasks };
