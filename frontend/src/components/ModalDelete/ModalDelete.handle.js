import { deleteTask } from '../../services/todoService';
import { toast } from 'react-toastify';
const handleDelete = async (
  id,
  setTasks,
  setError,
  setLoading,
  setOpenModal
) => {
  setLoading(true);
  try {
    await toast.promise(deleteTask(id), {
      pending: 'Loading...',
      success: {
        render({ data }) {
          return data.message || 'Successfully!';
        },
      },
      error: {
        render({ data: error }) {
          if (error.response) {
            const errorMessage =
              error.response.data.message || error.response.data.error;
            return errorMessage || 'Server error occurred';
          } else {
            return error.message || 'An error occurred';
          }
        },
      },
    });

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setOpenModal(false);
  } catch (error) {
    console.error('Delete error:', error);
  } finally {
    setLoading(false);
  }
};

export { handleDelete };
