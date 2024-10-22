import React from 'react';
import styles from './TodoItem.module.css';
import { MdDelete, MdEdit, MdOutlineDone } from 'react-icons/md';

const TodoItem = () => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={`${styles.checkbox} ${styles.checked}`}>
          <MdOutlineDone color='#ffffff' />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>Task Title</p>
          <p className={styles.date}>3:00 PM, 21/02/2022</p>
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
