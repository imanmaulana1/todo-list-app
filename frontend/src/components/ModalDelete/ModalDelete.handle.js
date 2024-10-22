import { deleteTask } from '../../services/todoService';

const handleDelete = async (
  id,
  setTasks,
  setError,
  setLoading,
  setOpenModal
) => {
  setLoading(true);
  try {
    await deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
    setOpenModal(false);
  }
};

export { handleDelete };
