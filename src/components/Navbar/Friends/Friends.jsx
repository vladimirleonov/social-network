import React from 'react';
import Friend from './Friend/Friend';

import s from './Friends.module.css';

const Friends = (props) => {

   let friendsItems = props.friends.map(f => <Friend id={f.id} name={f.name}/>)

   return (
      <div className={s.wrapper}>
         <div className={s.header}>
            Friends
         </div>
         <ul className={s.items}>
            {friendsItems}
         </ul>
      </div> 
   )
}

export default Friends;