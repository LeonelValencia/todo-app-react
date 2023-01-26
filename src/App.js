import React from 'react';
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import './App.css';
const todos = [
  { text: 'cortar cebolla', completed: true},
  { text: 'Tomar el curso de intro a react', completed: false},
  { text: 'llorar con la llorona', completed: false},
]
function App() {
  return (
    <React.Fragment>
      <h1>TODO APP</h1>
      <div className='app'>
        <TodoCounter />

        <TodoSearch />
        
        <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          ))}
        </TodoList>

        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export default App;
