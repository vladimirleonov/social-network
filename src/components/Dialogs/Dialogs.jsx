import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <ul className={s.dialogsItems}>
            <DialogsItem name="Dimych" id="1" />
            <DialogsItem name="Andrey" id="2" />
            <DialogsItem name="Valera" id="3" />
            <DialogsItem name="Sveta" id="4" />
         </ul>
         <div className={s.messages}>
            <Message name="Dimysh" message="I am learn react"/>
            <Message name="Me" message="Oh, good!" />
            <Message name="Me" message="I also wont to start learn react. I also wont to start learn react. I also wont to start learn react" />
            <Message name="Dimysh" message="You need to start" />
            <Message name="Me" message="Yes"/>
         </div>
      </div>
   )
}

export default Dialogs;