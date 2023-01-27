import React from 'react';
import { TodoContext } from "./TodoContext/index";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import './css/AppUI.css'

const AppUI = () => {
    return (  
        <React.Fragment>
            <h1>TODO APP</h1>
            <div className='app'>
                <TodoCounter />

                <TodoSearch />
                
                <TodoContext.Consumer>
                    {({
                        error, 
                        loading, 
                        searchedTodos, 
                        toggleCompleteTodos, 
                        deleteTodo
                    }) => (
                            <TodoList>
                                {error && <p>Desesperate, hubo un error...</p>}
                                {loading && <p>Estamos cargando, no desesperes...</p>}
                                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
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
                    )}
                </TodoContext.Consumer>

                <CreateTodoButton />
            </div>
        </React.Fragment>
    );
}
 
export { AppUI };