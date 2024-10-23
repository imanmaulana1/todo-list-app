import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getPercentage, getTaskCompleted, showToast } from './TodoProgress.handle';
import styles from './TodoProgress.module.css';

const TodoProgress = () => {
  const { tasks, percentage, setPercentage } = useContext(TaskContext);

  useEffect(() => {
    const percentage = getPercentage(tasks);
    setPercentage(percentage);

    showToast(percentage);
  }, [tasks]);

  return (
    <div className={styles.progress}>
      <CircularProgressbar
        value={percentage}
        text={null}
        styles={buildStyles({
          pathColor: `var(--primary-color)`,
        })}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>Day Progress</h3>
        <p className={styles.total}>
          {getTaskCompleted(tasks)} / {tasks.length}
        </p>
      </div>
    </div>
  );
};

export default TodoProgress;
