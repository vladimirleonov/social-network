import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Friend.module.css';

const Friend = (props) => {
   return (
      <li className={s.item}>
         <span></span>
         <NavLink className={s.name} to={`/${props.id }`}>{props.name}</NavLink>
      </li>
   )
}

export default Friend;