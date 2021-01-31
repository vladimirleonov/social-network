import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
   // debugger;
   const newMessageElement = React.createRef();

   // на основе данных с сервера создаю массивы компонент
   let dialogsElements = props.state.dialogsPage.dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>)
   let messagesElements = props.state.dialogsPage.messagesData.map(m => <Message id={m.id} name={m.name} message={m.message} index={m.index}/>)

   const addMessage = () => {
      props.addMessage();
   }

   const changeMessage = () => {
      const text = newMessageElement.current.value;
      props.changeNewMessageText(text);
   }
   
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
                  <input ref={newMessageElement} onChange={changeMessage} type="text" value={props.state.dialogsPage.newMessageText}/>
                  <button type='button' onClick={addMessage}>
                     Send
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;