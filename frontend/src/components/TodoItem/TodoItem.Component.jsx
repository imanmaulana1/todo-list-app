import styles from './TodoItem.module.css';
import { MdDelete, MdEdit, MdOutlineDone } from 'react-icons/md';
import { formattedDate } from './TodoItem.handle';

const TodoItem = ({ data }) => {
  const { task_name, completed, updated_at } = data;

  return (
    <article className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div
          className={
            completed === 1
              ? `${styles.checkbox} ${styles.checked}`
              : styles.checkbox
          }
        >
          {completed === 1 && <MdOutlineDone color='#ffffff' />}
        </div>
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
