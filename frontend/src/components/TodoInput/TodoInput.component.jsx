import { useContext, useState } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import {
  handleBlur,
  handleChange,
  handleFocus,
  handleSubmit,
} from './TodoInput.handle';
import styles from './TodoInput.module.css';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const { setTasks, setError, setLoading } = useContext(TaskContext);

  return (
    <section className={styles.container}>
      <form
        className={styles.formWrapper}
        onSubmit={(e) => handleSubmit(e, input, setInput, setTasks, setError, setLoading)}
      >
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
    </section>
  );
};

export default TodoInput;
