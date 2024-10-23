import { createTask } from '../../services/todoService';
import { getTasks } from '../../utils/api';
import { toast } from 'react-toastify';

const handleSubmit = async (
  e,
  input,
  setInput,
  setTasks,
  setError,
  setLoading
) => {
  e.preventDefault();

  if (!input) return;

  const payload = {
    task_name: input,
  };

  setLoading(true);
  try {
    await toast.promise(createTask(payload), {
      pending: 'Creating new task...',
      success: {
        render({ data }) {
          setInput('');
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

    await getTasks(setTasks, setError, setLoading);
  } catch (error) {
    console.error('Delete error:', error);
  } finally {
    setLoading(false);
  }
};

const handleChange = (e, setInput) => {
  setInput(e.target.value);
};

const handleFocus = (setIsFocus) => {
  setIsFocus(true);
};

const handleBlur = (setIsFocus) => {
  setIsFocus(false);
};

export { handleSubmit, handleChange, handleFocus, handleBlur };
