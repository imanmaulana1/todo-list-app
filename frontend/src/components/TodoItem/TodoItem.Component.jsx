import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { MdDelete, MdEdit, MdOutlineDone } from 'react-icons/md';
import { formattedDate, handleStatus } from './TodoItem.handle';
import styles from './TodoItem.module.css';

const TodoItem = ({ data }) => {
  const { id, task_name, completed, updated_at } = data;
  const { setLoading, setTasks, setError } = useContext(TaskContext);

  return (
    <article className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <button
          className={
            completed === 1
              ? `${styles.checkbox} ${styles.checked}`
              : styles.checkbox
          }
          onClick={() =>
            handleStatus(id, completed, setTasks, setError, setLoading)
          }
          aria-label={
            completed === 1
              ? 'Mark task as incomplete'
              : 'Mark task as complete'
          }
        >
          {completed === 1 && <MdOutlineDone color='#ffffff' />}
        </button>
        <div className={styles.content}>
          <p className={styles.title}>{task_name}</p>
          <p className={styles.date}>{formattedDate(updated_at)}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.editButton} title='Edit Task'>
          <MdEdit />
        </button>
        <button className={styles.deleteButton} title='Delete Task'>
          <MdDelete />
        </button>
      </div>
    </article>
  );
};

export default TodoItem;
