import { Header, TodoFilter, TodoInput } from './components';

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <TodoFilter />
        <TodoInput />
      </main>
    </div>
  );
}

export default App;
