import {
  Header,
  TodoFilter,
  TodoInput,
  TodoItem,
  TodoList,
} from './components';

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <TodoFilter />
        <TodoInput />
        <TodoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoList>
      </main>
    </div>
  );
}

export default App;
