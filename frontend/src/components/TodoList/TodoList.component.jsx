import { useState } from 'react';
import styles from './TodoList.module.css';

const TodoList = ({ children }) => {
  const [isCompleted, setIsCompleted] = useState(true);
  return isCompleted ? (
    <section className={styles.todoList}>{children}</section>
  ) : (
    <div className={styles.empty}>
      <h2 className={styles.title}>You have no tasks.</h2>
    </div>
  );
};

export default TodoList;
