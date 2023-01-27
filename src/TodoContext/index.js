import React from 'react';
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()
const ejemplo = [
      { text: 'cortar cebolla', completed: true},
      { text: 'Tomar el curso de intro a react', completed: false},
      { text: 'llorar con la llorona', completed: false},
]
function TodoProvider(props) {
    const {
        item:todos, 
        saveItem:saveTodos, 
        loading,
        error,
    } = useLocalStorage('TODOS_V1', [])
      const [searchValue, setSearchValue] = React.useState('');
      const completedTodos = todos.filter(todo => todo.completed).length;
      const totalTodos = todos.length;
      let searchedTodos = [];
    
    if (!searchValue.length >= 1){
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase()
          const searchText = searchValue.toLowerCase()
          return todoText.includes(searchText);
        })
    }
    
    const toggleCompleteTodos  = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue, 
            setSearchValue,
            searchedTodos,
            toggleCompleteTodos,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider};