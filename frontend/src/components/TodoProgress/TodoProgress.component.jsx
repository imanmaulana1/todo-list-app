import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './TodoProgress.module.css';

const TodoProgress = () => {
  const [percentage, setPercentage] = useState(0);
  const { tasks } = useContext(TaskContext);

  const getPercentage = (tasks) => {
    const completed = getTaskCompleted(tasks);
    const totalTasks = tasks.length;

    if (totalTasks === 0) {
      setPercentage(0);
    } else {
      setPercentage(Math.round((completed / totalTasks) * 100));
    }
  };

  const getTaskCompleted = (tasks) => {
    return tasks.filter((task) => task.completed === 1).length;
  };

  useEffect(() => {
    getPercentage(tasks);
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
