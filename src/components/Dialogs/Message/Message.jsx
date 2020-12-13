import React from 'react';
import s from './Message.module.css';

const Message = (props) => {

   return (
      <div className={s.wrapper}>
         <div className={s.descr}>
            <img src="https://finewall.ru/upload/iblock/2df/2df64c2f9e005b8daf4bc10088c6eff7.png" alt="#" />
            <div className={s.name}>{props.name}</div>
         </div>
         <div className={s.message}>{props.message}</div>
      </div>
   )
}

export default Message;