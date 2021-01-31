import React from 'react';
import s from './User.module.css';

const User = (props) => {

   return (
      <li className={s.users__item}>
         <div className={s.users__item_left_block}>
            <span></span>
            {
               props.followed
                  ? <button onClick={()=>{props.onUnfollow(props.id)}}>Follow</button>
                  : <button onClick={()=>{props.onFollow(props.id)}}>Unfollow</button>
            }
         </div>
         <div className={s.users__item_right_block}>
            <div className={s.users__item_info}>
               <a href="#">{props.fullName}</a>
               <div className={s.users__item_status}>
                  {props.status}
               </div>
               <div className={s.users__item_place}>
                  <div className={s.users__item_country}>{props.country},</div>
                  <div className={s.users__item_city}>{props.city}</div>
               </div>
            </div>
            <div className={s.dots}>
               <span>...</span>
            </div>
         </div>
      </li>
   )
}

export default User;