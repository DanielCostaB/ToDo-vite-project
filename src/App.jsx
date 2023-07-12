import { useState } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
  {
    id: 1,
    text: "Criar funcionalidade X no sistema",
    category: "Trabalho",
    isComplete: false,
  },
  {
    id: 2,
    text: 'Ir para academia',
    category: "Pessoal",
    isComplete: false,
  },
  {
    id: 3,
    text: "Estudar react",
    category: "Estudos",
    isComplete: false,
  },   
  ]);

  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodos = [...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isComplete: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter( todo => 
      todo.id !== id ? todo : null 
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isComplete = !todo.isComplete : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <h1>Lista de Tarefa</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className='todo-list'>
        {todos.filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App;
