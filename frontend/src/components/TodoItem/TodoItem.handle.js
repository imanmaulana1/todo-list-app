import moment from 'moment';
import { updateStatusTask } from '../../services/todoService';

const handleStatus = async (id, completed, setTasks) => {
  const payload = {
    completed: completed === 0 ? 1 : 0,
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
  };

  try {
    await updateStatusTask(id, payload);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: payload.completed,
              updated_at: payload.updated_at,
            }
          : task
      )
    );
  } catch (error) {
    console.error('Error updating task status:', error);
  }
};

export { handleStatus };
