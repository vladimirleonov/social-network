import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Menu.module.css';

const Menu = () => {
   return (
      <ul className={s.menu}>
         <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/profile">Profile</NavLink></li>
         <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/dialogs">Messages</NavLink></li>
         <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/news">News</NavLink></li>
         <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/music">Music</NavLink></li>
         <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/settings">Settings</NavLink></li>
         <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="find-users">Find users</NavLink></li>
      </ul>
   )
}

export default Menu;