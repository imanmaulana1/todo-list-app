import { createTask } from '../../services/todoService';
import { getTasks } from '../../utils/api';

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
    await createTask(payload);
    setInput('');
    await getTasks(setTasks, setError, setLoading);
  } catch (error) {
    console.error(error.message);
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
