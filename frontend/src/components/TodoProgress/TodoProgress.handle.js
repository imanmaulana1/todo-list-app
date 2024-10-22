const getPercentage = (tasks, setPercentage) => {
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

export { getPercentage, getTaskCompleted };
