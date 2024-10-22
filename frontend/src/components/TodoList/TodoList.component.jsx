import { useContext, useEffect } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import Loader from '../Loader/Loader.component';
import { getTasks } from './TodoList.handle';
import styles from './TodoList.module.css';

const TodoList = ({ children }) => {
  const { tasks, setTasks, setError, loading, setLoading } =
    useContext(TaskContext);

  useEffect(() => {
    getTasks(setTasks, setError, setLoading);
  }, []);

  console.log(tasks);

  return (
    <>
      {loading && <Loader />}
      {!loading &&
        (tasks?.length > 0 ? (
          <section className={styles.todoList}>{children}</section>
        ) : (
          <section className={styles.empty}>
            <h2 className={styles.title}>You have no tasks.</h2>
          </section>
        ))}
    </>
  );
};

export default TodoList;
