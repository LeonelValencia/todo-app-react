import React from 'react';
import '../css/TodoSearch.css';

const TodoSearch = () => {
    const onSearchValueChange = (e)=> {
        console.log(e.target.value);
    }

    return (  
        <input 
            className="TodoSearch" placeholder="Cebolla" 
            onChange={onSearchValueChange}    
        />
    );
}
 
export { TodoSearch };