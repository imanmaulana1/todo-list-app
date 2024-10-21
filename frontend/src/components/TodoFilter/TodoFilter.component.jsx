import React from 'react';
import { MdOutlineDoneAll } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import styles from './TodoFilter.module.css';

const TodoFilter = () => {
  return (
    <section className={styles.todoControls}>
      <button className={styles.markAllButton}>
        Mark All Completed <MdOutlineDoneAll />
      </button>
      <div className={styles.filterWrapper}>
        <select name='filter' id='filter' className={styles.filterSelect}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='notCompleted'>Not Completed</option>
        </select>
        <div className={styles.searchWrapper}>
          <label htmlFor="search" className='sr-only'>Search</label>
          <input
            type='text'
            name='search'
            id='search'
            className={styles.searchInput}
            placeholder='Search'
          />
          <button className={styles.searchButton}>
            <IoSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodoFilter;
