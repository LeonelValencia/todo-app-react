import React from 'react';
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
// import './App.css';
const todos = [
  { text: 'cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro a react', completed: false},
  { text: 'llorar con la llorona', completed: false},
]
function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
