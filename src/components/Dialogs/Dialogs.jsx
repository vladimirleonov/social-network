import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

   const newMessageElement = React.createRef();

   const addMessage = (e) => {
      e.preventDefault();
      const text = newMessageElement.current.value;
      // alert(text);
   }

   // на основе данных с сервера создаю массивы компонент
   let dialogsElements = props.state.dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>)
   let messagesElements = props.state.messagesData.map(m => <Message id={m.id} name={m.name} message={m.message} index={m.index}/>)

   
   return (
      <div className={s.dialogs}>
         <ul className={s.dialogsItems}>
            {/* отрисовываю массив диалогов */}
            {dialogsElements}
         </ul>
         <div className={s.messages}>
            {/* отрисовываю массив сообщений */}
            <div className={s.wrapper}>
              {messagesElements} 
            </div>
            <div className={s.newMessage}>   
               <form action="#">
                  <input ref={newMessageElement} type="text" />
                  <button onClick={addMessage} type="submit">
                     Send
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;