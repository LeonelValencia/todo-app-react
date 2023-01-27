import React from 'react';
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";

const AppUI = (
    {
        totalTodos,
        completedTodos,
        searchValue, 
        setSearchValue,
        searchedTodos,
        toggleCompleteTodos,
        deleteTodo,
    }
) => {
    return (  
        <React.Fragment>
            <h1>TODO APP</h1>
            <div className='app'>
                <TodoCounter 
                    total={totalTodos}
                    completed={completedTodos}
                />

                <TodoSearch 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue}
                />
                
                <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={()=> toggleCompleteTodos (todo.text)}  
                    onDelete={()=> deleteTodo(todo.text)}  
                    />
                ))}
                </TodoList>

                <CreateTodoButton />
            </div>
        </React.Fragment>
    );
}
 
export { AppUI };