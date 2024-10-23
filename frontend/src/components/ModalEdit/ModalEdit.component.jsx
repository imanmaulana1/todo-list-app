import { useContext, useEffect, useId, useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { TaskContext } from '../../contexts/TaskContext';
import { getTaskById, handleChange, handleSubmit } from './ModalEdit.handle';
import styles from './ModalEdit.module.css';

const ModalEdit = () => {
  const idInput = useId();
  const idStatus = useId();
  const [formValues, setFormValues] = useState({
    task_name: '',
    completed: 'false',
  });
  const { setOpenModal } = useContext(ModalContext);
  const { taskId, setTasks, setError, setLoading } = useContext(TaskContext);

  useEffect(() => {
    const fetchTask = async () => {
      const fetchedTask = await getTaskById(taskId, setError);
      if (fetchedTask) {
        setFormValues({
          task_name: fetchedTask.task_name || '',
          completed: fetchedTask.completed === 1 ? 'true' : 'false',
        });
      }
    };
    fetchTask();
  }, [taskId]);

  return (
    <div className={styles.modalContent}>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            taskId,
            formValues,
            setTasks,
            setError,
            setLoading,
            setOpenModal
          )
        }
      >
        <div className={styles.formGroup}>
          <div className={styles.formControl}>
            <label htmlFor={idInput} className={styles.label}>
              Task Name
            </label>
            <input
              type='text'
              name='task_name'
              id={idInput}
              className={styles.input}
              value={formValues.task_name}
              onChange={(e) => handleChange(e, setFormValues)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor={idStatus} className={styles.label}>
              Status
            </label>
            <select
              name='completed'
              id={idStatus}
              className={styles.select}
              value={formValues.completed}
              onChange={(e) => handleChange(e, setFormValues)}
            >
              <option value='true'>Completed</option>
              <option value='false'>Not Completed</option>
            </select>
          </div>
        </div>
        <div className={styles.modalActions}>
          <button type='submit' className={styles.saveModalButton}>
            Save Changes
          </button>
          <button
            type='button'
            className={styles.cancelModalButton}
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalEdit;
