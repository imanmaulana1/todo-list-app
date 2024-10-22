import moment from 'moment';
import { updateStatusTask } from '../../services/todoService';
import { getTasks } from '../TodoList/TodoList.handle';

const formattedDate = (date) => {
  return moment(date).format('h:mm A, DD/MM/YYYY');
};

const handleStatus = async (id, completed, setTasks, setError, setLoading) => {
  setLoading(true);

  const payload = {
    completed: completed === 0 ? 1 : 0,
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
  };

  try {
    await updateStatusTask(id, payload);
    getTasks(setTasks, setError, setLoading);
  } catch (error) {
    console.error('Error updating task status:', error);
  } finally {
    setLoading(false);
  }
};

export { formattedDate, handleStatus };
