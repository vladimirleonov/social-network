import React from 'react'


const Navbar = () => {
   return (
      <nav className="navbar">
         <ul>
            <li className="navbar__link navbar__profile"><a href="#">Profile</a></li>
            <li className="navbar__link navbar__messages"><a href="#">Messages</a></li>
            <li className="navbar__link navbar__news"><a href="#">News</a></li>
            <li className="navbar__link navbar__music"><a href="#">Music</a></li>
            <li className="navbar__link navbar__settings"><a href="#">Settings</a></li>
         </ul>
      </nav>
   )
}

export default Navbar