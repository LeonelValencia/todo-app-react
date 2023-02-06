import React from 'react';
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import '../css/TodoItem.css';

const TodoItem = (props) => {
    return (  
        <li className={`TodoItem ${props.completed && 'TodoItem--complete'}`}>
            <CompleteIcon 
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <DeleteIcon 
                onDelete={props.onDelete}
            />
        </li>
    );
}
 
export { TodoItem };