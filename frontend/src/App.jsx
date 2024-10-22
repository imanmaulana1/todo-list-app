import { useContext } from 'react';
import {
  Header,
  TodoFilter,
  TodoInput,
  TodoItem,
  TodoList,
} from './components';
import { TaskContext } from './contexts/TaskContext';

function App() {
  const { tasks } = useContext(TaskContext);
  return (
    <div className='container'>
      <Header />
      <main>
        <TodoFilter />
        <TodoInput />
        <TodoList>
          {tasks?.map((task) => (
            <TodoItem key={task.id} data={task} />
          ))}
        </TodoList>
      </main>
    </div>
  );
}

export default App;
