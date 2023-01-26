import React from 'react';
import '../css/TodoSearch.css';

const TodoSearch = () => {
    const [searchValue, setSearchValue] = React.useState('')
    const onSearchValueChange = (e)=> {
        console.log(e.target.value);
        setSearchValue(e.target.value)
    }

    return [ 
        <input 
            className="TodoSearch" 
            placeholder="Cebolla" 
            value={searchValue}
            onChange={onSearchValueChange}    
        />,
        <p>{searchValue}</p>
    ];

}
 
export { TodoSearch };