import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './ModalEdit.module.css';

const ModalEdit = () => {
  const { setOpenModal } = useContext(ModalContext);
  return (
    <div className={styles.modalContent}>
      <input type='text' className={styles.editInput} />
      <div className={styles.modalActions}>
        <button
          className={styles.saveButton}
          onClick={() => {
            console.log('hello');
          }}
        >
          Save Changes
        </button>
        <button
          className={styles.cancelButton}
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalEdit;
