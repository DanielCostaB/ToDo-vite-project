import { useState } from 'react'

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

  return (
    <div className='app'>
      <h1>Lista de Tarefa</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <div className='todo'>
            <div className='content'>
              <p>{todo.text}</p>
              <p className="category">({todo.category})</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default App;
