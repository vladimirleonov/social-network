import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogsItem = (props) => {
   return (
      <li className={s.dialog}>
         <span></span>
         <NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink>
      </li>
   )
}

export default DialogsItem;