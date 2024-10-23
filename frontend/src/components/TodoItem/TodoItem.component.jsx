import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { ModalContext } from '../../contexts/ModalContext';
import Modal from '../Modal/Modal.component';
import DeleteModal from '../ModalDelete/ModalDelete.component';
import ModalEdit from '../ModalEdit/ModalEdit.component';
import { MdDelete, MdEdit, MdOutlineDone } from 'react-icons/md';
import { formatDate } from '../../utils/helpers';
import { handleStatus } from './TodoItem.handle';
import styles from './TodoItem.module.css';

const TodoItem = ({ data }) => {
  const { id, task_name, completed, updated_at } = data;
  const { setLoading, setTasks, setError, setTaskId } = useContext(TaskContext);
  const { openModal, setOpenModal, modalName, setModalName } =
    useContext(ModalContext);

  const handleOpenModal = (name) => {
    setOpenModal(true);
    setModalName(name);
  };

  const renderModalContent = () => {
    switch (modalName) {
      case 'edit':
        return <ModalEdit />;

      case 'delete':
        return <DeleteModal />;

      default:
        return null;
    }
  };

  return (
    <>
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
            <p className={styles.date}>
              {formatDate(updated_at, 'h:mm A, DD/MM/YYYY')}
            </p>
          </div>
        </div>
        <div className={styles.actions}>
          <button
            className={styles.editButton}
            title='Edit Task'
            onClick={() => {
              handleOpenModal('edit');
              setTaskId(id);
            }}
          >
            <MdEdit />
          </button>
          <button
            className={styles.deleteButton}
            title='Delete Task'
            onClick={() => {
              handleOpenModal('delete');
              setTaskId(id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </article>
      {openModal && (
        <Modal title={modalName === 'edit' ? 'Edit Task' : 'Delete Task'}>
          {renderModalContent()}
        </Modal>
      )}
    </>
  );
};

export default TodoItem;
