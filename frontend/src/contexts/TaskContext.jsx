import { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [taskId, setTaskId] = useState(null);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        task,
        setTask,
        loading,
        setLoading,
        error,
        setError,
        taskId,
        setTaskId,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
