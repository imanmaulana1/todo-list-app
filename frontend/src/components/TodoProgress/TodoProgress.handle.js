import { toast } from 'react-toastify';

const getTaskCompleted = (tasks) => {
  return tasks.filter((task) => task.completed === 1).length;
};

const getPercentage = (tasks) => {
  const completed = getTaskCompleted(tasks);
  const totalTasks = tasks.length;

  if (totalTasks === 0) return 0;

  return Math.round((completed / totalTasks) * 100);
};

const showToast = (percentage) => {
  if (percentage === 100) {
    toast.success(`👏  Great job! All tasks are done!`, {
      icon: false,
    });
  }
};

export { getTaskCompleted, getPercentage, showToast };
