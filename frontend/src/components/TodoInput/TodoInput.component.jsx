import React, { useState } from 'react';
import styles from './TodoInput.module.css';
import { handleBlur, handleChange, handleFocus } from './TodoInput.handle';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className={styles.container}>
      <form className={styles.formWrapper}>
        <div className={styles.dots}>
          {[...Array(3)].map((_, index) => (
            <div
              className={`${styles.dot} ${isFocus && styles.animation}`}
              key={index}
            ></div>
          ))}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='todoInput' className='sr-only'>
            Task Input
          </label>
          <input
            type='text'
            name='todo'
            id='todoInput'
            value={input}
            placeholder={
              isFocus ? 'Please enter...' : 'What is your next task?'
            }
            className={styles.input}
            onFocus={() => handleFocus(setIsFocus)}
            onBlur={() => handleBlur(setIsFocus)}
            onChange={(e) => handleChange(e, setInput)}
          />
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
