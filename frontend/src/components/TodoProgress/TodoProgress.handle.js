const getTaskCompleted = (tasks) => {
  return tasks.filter((task) => task.completed === 1).length;
};

const getPercentage = (tasks, setPercentage) => {
  const completed = getTaskCompleted(tasks);
  const totalTasks = tasks.length;

  if (totalTasks === 0) {
    setPercentage(0);
  } else {
    setPercentage(Math.round((completed / totalTasks) * 100));
  }
};

export { getTaskCompleted, getPercentage };
