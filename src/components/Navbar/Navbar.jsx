import React from 'react';
import Menu from './Menu/Menu';
import Friends from './Friends/Friends';

import s from './Navbar.module.css';

const Navbar = (props) => {
   return (
      <nav className={s.navbar}>
         <Menu/>
         <Friends friends={props.state.navbar.friends}/>
      </nav>
   )
}

export default Navbar;