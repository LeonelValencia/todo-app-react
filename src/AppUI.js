import React from 'react';
import { TodoContext } from "./TodoContext/index";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { TodoForm } from './Components/TodoForm';
import { TodosError } from './Components/TodosError';
import { TodosLoading } from './Components/TodosLoading';
import { EmptyTodos } from './Components/EmptyTodos';
import { Modal } from "./Modal";
import './css/AppUI.css'

const AppUI = () => {
    const {
        error, 
        loading, 
        searchedTodos, 
        toggleCompleteTodos, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return (  
        <React.Fragment>
            <h1>TODO APP</h1>
            <div className='app'>
                <TodoCounter />

                <TodoSearch />

                <TodoList>
                    {error && <TodosError error={error}/>}
                    {loading && <TodosLoading />}
                    {(!loading && !searchedTodos.length) && <EmptyTodos />}
                    
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
                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
                <CreateTodoButton 
                    setOpenModal={setOpenModal}
                />
            </div>
        </React.Fragment>
    );
}
 
export { AppUI };