import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { ModalContext } from '../../contexts/ModalContext';
import { MdDeleteForever } from 'react-icons/md';
import styles from './ModalDelete.module.css';
import { handleDelete } from './ModalDelete.handle';

const ModalDelete = () => {
  const { taskId, setTasks, setError, setLoading } = useContext(TaskContext);
  const { setOpenModal } = useContext(ModalContext);

  return (
    <div className={styles.modalContent}>
      <MdDeleteForever
        size={85}
        color='var(--danger-color)'
        className={styles.deleteIcon}
      />

      <p className={styles.deleteText}>
        Are you sure you want to delete this task?
      </p>
      <div className={styles.modalActions}>
        <button
          className={styles.deleteModalButton}
          onClick={() =>
            handleDelete(taskId, setTasks, setError, setLoading, setOpenModal)
          }
        >
          Delete
        </button>
        <button
          className={styles.cancelModalButton}
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalDelete;
