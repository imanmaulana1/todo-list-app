import { useContext, useId } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { MdOutlineDoneAll } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import styles from './TodoFilter.module.css';
import { handleCompleted } from './TodoFilter.handle';

const TodoFilter = () => {
  const idInput = useId();
  const idSelect = useId();
  const { setTasks, setError, setLoading, percentage } = useContext(TaskContext);
  return (
    <section className={styles.todoControls}>
      <button
        className={styles.markAllButton}
        onClick={() => handleCompleted(setTasks, setError, setLoading, percentage)}
      >
        Mark All Completed <MdOutlineDoneAll />
      </button>
      <div className={styles.filterWrapper}>
        <label htmlFor={idSelect} className='sr-only'>
          Filter
        </label>
        <select name='filter' id={idSelect} className={styles.filterSelect}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='notCompleted'>Not Completed</option>
        </select>
        <div className={styles.searchWrapper}>
          <label htmlFor={idInput} className='sr-only'>
            Search
          </label>
          <input
            type='text'
            name='search'
            id={idInput}
            className={styles.searchInput}
            placeholder='Search'
          />
          <button className={styles.searchButton} aria-labelledby='search'>
            <IoSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodoFilter;
