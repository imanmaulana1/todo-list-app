import { useContext, useEffect, useId } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { MdOutlineDoneAll } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import styles from './TodoFilter.module.css';
import { handleCompleted } from './TodoFilter.handle';

const TodoFilter = () => {
  const idInput = useId();
  const idSelect = useId();
  const {
    tasks,
    setTasks,
    setError,
    setLoading,
    percentage,
    setFilteredTasks,
    filterStatus,
    setFilterStatus,
    searchTerm,
    setSearchTerm,
  } = useContext(TaskContext);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleFilterChange = (e) => {
    const newStatus = e.target.value;
    setFilterStatus(newStatus);
    handleFilter(newStatus, searchTerm); // Panggil fungsi filter ketika filter berubah
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleFilter(filterStatus, searchTerm);
    }
  };

  const handleFilter = (status, name) => {
    const taskName = name.trim().toLowerCase();
    const filtered = tasks.filter((task) => {
      const matchesStatus =
        status === 'all' ||
        (status === 'completed' && task.completed === 1) ||
        (status === 'notCompleted' && task.completed === 0);
      const matchesName = task.task_name.toLowerCase().includes(taskName);
      return matchesStatus && matchesName;
    });

    setFilteredTasks(filtered);
  };

  return (
    <section className={styles.todoControls}>
      <button
        className={styles.markAllButton}
        onClick={() =>
          handleCompleted(setTasks, setError, setLoading, percentage)
        }
      >
        Mark All Completed <MdOutlineDoneAll />
      </button>
      <div className={styles.filterWrapper}>
        <label htmlFor={idSelect} className='sr-only'>
          Filter
        </label>
        <select
          name='filter'
          id={idSelect}
          className={styles.filterSelect}
          value={filterStatus}
          onChange={handleFilterChange}
        >
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
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className={styles.searchButton}
            onClick={() => handleFilter(filterStatus, searchTerm)}
            aria-labelledby='search'
          >
            <IoSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodoFilter;
