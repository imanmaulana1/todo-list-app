import { singleTask, updateTask } from '../../services/todoService';
import { getTasks } from '../../utils/api';

const getTaskById = async (id, setError) => {
  try {
    const tasks = await singleTask(id);

    if (!tasks || tasks.length === 0) {
      throw new Error('Task not found');
    }
    return tasks[0];
  } catch (error) {
    setError(error);
    return null;
  }
};

const handleChange = (e, setFormValues) => {
  const { name, value } = e.target;

  setFormValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));
};

const handleSubmit = async (
  e,
  taskId,
  formValues,
  setTasks,
  setError,
  setLoading,
  setOpenModal
) => {
  e.preventDefault();
  setLoading(true);

  try {
    const completed = formValues.completed === 'true' ? 1 : 0;
    const payload = {
      task_name: formValues.task_name,
      completed,
    };

    await updateTask(taskId, payload);
    await getTasks(setTasks, setError, setLoading);
    setOpenModal(false);
  } catch (error) {
    console.error('Error modal Edit', error.message);
  } finally {
    setLoading(false);
  }
};

export { getTaskById, handleChange, handleSubmit };
