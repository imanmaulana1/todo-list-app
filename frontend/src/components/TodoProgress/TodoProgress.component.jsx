import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './TodoProgress.module.css';

const TodoProgress = () => {
  const [percentage, setPercentage] = useState(20);
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
        <p className={styles.total}>2 / 5</p>
      </div>
    </div>
  );
};

export default TodoProgress;
