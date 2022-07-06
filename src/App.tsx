import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {
        id: Date.now(),
        todo,
        isDone: false,
      }]);
      setTodo("")
    }

  }

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <div className="App">
      <h1>Hello</h1>
      <Home todo={todo} setTodo={setTodo} handle={handleAdd} />
      {/* {todos.map((t) => (
        <li key={t.id}>{t.todo}</li>
      ))} */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
