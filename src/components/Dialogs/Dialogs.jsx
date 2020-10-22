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
// на основе данных с сервера создаю массивы компонент
let dialogsElements = dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>)
let messagesElements = messagesData.map(m => <Message id={m.id} name={m.name} message={m.message}/>)

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <ul className={s.dialogsItems}>
            {/* отрисовываю массив диалогов */}
            {dialogsElements}
         </ul>
         <div className={s.messages}>
            {/* отрисовываю массив компонент */}
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs;