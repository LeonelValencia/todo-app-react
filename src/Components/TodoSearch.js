import React from 'react';
import '../css/TodoSearch.css';
import { TodoContext } from '../TodoContext';

const TodoSearch = () => {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (e)=> {
        setSearchValue(e.target.value)
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Busca un TODO" 
            value={searchValue}
            onChange={onSearchValueChange}    
        />
    );
}
 
export { TodoSearch };