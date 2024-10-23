import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Header,
  TodoFilter,
  TodoInput,
  TodoItem,
  TodoList,
} from './components';
import { TaskContext } from './contexts/TaskContext';

function App() {
  const { tasks, filteredTasks, searchTerm } = useContext(TaskContext);
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        pauseOnHover={false}
        closeOnClick
        newestOnTop
        transition:Bounce
      />
      <div className='container'>
        <Header />
        <main>
          <TodoFilter />
          <TodoInput />
          <TodoList>
            {filteredTasks.length > 0 || searchTerm
              ? filteredTasks.map((task) => (
                  <TodoItem key={task.id} data={task} />
                ))
              : tasks.map((task) => <TodoItem key={task.id} data={task} />)}
          </TodoList>
        </main>
      </div>
    </>
  );
}

export default App;
