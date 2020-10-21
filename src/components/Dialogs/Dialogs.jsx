import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let dialogsData = [
   {id: 1, name: 'Dimych'},
   {id: 2, name: 'Andrey'},
   {id: 3, name: 'Valera'},
   {id: 4, name: 'Sveta'}
]

let messagesData = [
   { id: 1, name:"Dimysh", message:"I am learn react" },
   { id: 2, name:"Me", message:"Oh, good!" },
   { id: 3, name:"Me", message:"I also wont to start learn react. I also wont to start learn react. I also wont to start learn react" },
   { id: 4, name:"Dimysh", message:"You need to start" },
   { id: 5, name:"Me", message:"Yes" }
]

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <ul className={s.dialogsItems}>
            <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
            <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
         </ul>
         <div className={s.messages}>
            <Message name={messagesData[0].name} message={messagesData[0].message} id={messagesData[0].id}/>
            <Message name={messagesData[1].name} message={messagesData[1].message} id={messagesData[1].id}/>
            <Message name={messagesData[2].name} message={messagesData[2].message} id={messagesData[2].id}/>
            <Message name={messagesData[3].name} message={messagesData[3].message} id={messagesData[3].id}/>
            <Message name={messagesData[4].name} message={messagesData[4].message} id={messagesData[4].id}/>
         </div>
      </div>
   )
}

export default Dialogs;