import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { IoMdClose } from 'react-icons/io';
import styles from './Modal.module.css';

const Modal = ({ title, children }) => {
  const { setOpenModal } = useContext(ModalContext);

  return (
    <div className={styles.overlay} onClick={() => setOpenModal(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            onClick={() => setOpenModal(false)}
            className={styles.closeButton}
            aria-label='Close modal'
          >
            <IoMdClose size={24} />
          </button>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
