import TodoProgress from '../TodoProgress/TodoProgress.component';
import { formatDate } from './Header.handle';
import styles from './Header.module.css';

const Header = () => {
  const currentDate = new Date();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Today's Tasks</h1>
        <p className={styles.description}>
          Manage your tasks and boost your productivity
        </p>
        <h2 className={styles.subtitle}>{formatDate(currentDate)}</h2>
      </div>
      <div className={styles.headerContent}>
        <TodoProgress />
      </div>
    </header>
  );
};

export default Header;
