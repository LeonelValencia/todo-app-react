import React from 'react';
// import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import { BsCheckLg } from 'react-icons/bs'
// import { TiDelete } from 'react-icons/ti'
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <BsCheckLg className='Icon-svg Icon-svg--check' color={color}/>
    // <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    // <TiDelete className="Icon-svg Icon-svg--delete" color={color}/>
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = 'white', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };