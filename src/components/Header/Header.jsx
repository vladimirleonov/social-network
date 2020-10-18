import React from 'react'
import s from './Header.module.css'

const Header = () => {
   return (
      <header className={s.header}>
         {/* <img className="header__logo" src="https://f0.pngfuel.com/png/49/612/black-logo-illustration-png-clip-art.png" /> */}
         <img className={s.header__logo} src="https://mir-s3-cdn-cf.behance.net/projects/max_808/a2ccab67359863.Y3JvcCw5NDMsNzM4LDIyOCwxMjY.jpg"/>
      </header>
   )
}

export default Header