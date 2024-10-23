import { toast } from 'react-toastify';
import { markAllTasksAsCompleted } from '../../services/todoService';
import { getTasks } from '../../utils/api';

const handleCompleted = async (setTasks, setError, setLoading, percentage) => {
  setLoading(true);

  if (percentage === 100) {
    toast.info(`👏  You have completed all tasks!`);
    setLoading(false);
    return;
  }

  try {
    await markAllTasksAsCompleted();
    await getTasks(setTasks, setError, setLoading);
  } catch (error) {
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};

export { handleCompleted };
