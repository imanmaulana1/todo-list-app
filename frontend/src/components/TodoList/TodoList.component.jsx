import { useContext, useEffect } from 'react';
import styles from './TodoList.module.css';
import { getTasks } from './TodoList.handle';
import { TaskContext } from '../../contexts/TaskContext';
import Loader from '../Loader/Loader.component';

const TodoList = ({ children }) => {
  const { tasks, setTasks, setError, loading, setLoading } =
    useContext(TaskContext);

  useEffect(() => {
    getTasks(setTasks, setError, setLoading);
  }, [setTasks, setError, setLoading]);

  console.log(tasks);

  return (
    <>
      {loading ? (
        <div className={styles.empty}>
          <Loader />
        </div>
      ) : tasks?.length > 0 ? (
        <section className={styles.todoList}>{children}</section>
      ) : (
        <div className={styles.empty}>
          <h2 className={styles.title}>You have no tasks.</h2>
        </div>
      )}
    </>
  );
};

export default TodoList;
