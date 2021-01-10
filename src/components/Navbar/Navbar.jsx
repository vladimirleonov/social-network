import React from 'react';
import Menu from './Menu/Menu';
import Friends from './Friends/Friends';

import s from './Navbar.module.css';

const Navbar = (props) => { 
   
   let state = props.store.getState();

   return (
      <nav className={s.navbar}>
         <Menu/>
         <Friends friends={state.navbar.friends}/>
      </nav>
   )
}

export default Navbar;