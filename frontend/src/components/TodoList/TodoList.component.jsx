import { useContext, useEffect } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { getTasks } from '../../utils/api';
import Loader from '../Loader/Loader.component';
import styles from './TodoList.module.css';

const TodoList = ({ children }) => {
  const { tasks, setTasks, setError, loading, setLoading, filteredTasks, searchTerm } =
    useContext(TaskContext);

  useEffect(() => {
    getTasks(setTasks, setError, setLoading);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          {tasks?.length > 0 ? (
            <section className={styles.todoList}>{children}</section>
          ) : (
            <section className={styles.empty}>
              <h2 className={styles.title}>You have no tasks.</h2>
            </section>
          )}
          {filteredTasks.length === 0 && searchTerm && tasks.length > 0 && (
            <section className={styles.empty}>
              <h2 className={styles.title}>
                No tasks found for "{searchTerm}".
              </h2>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default TodoList;
