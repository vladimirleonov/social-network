import React from 'react';
import Dialogs from './Dialogs';
import { onNewMessageTextActionCreator, onAddMessageActionCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
   // debugger;
   let state = props.store.getState();

   const onAddMessage = () => {
      props.store.dispatch(onAddMessageActionCreator());
   }

   const onChangeNewMessageText = (text) => {
      props.store.dispatch(onNewMessageTextActionCreator(text));
   }
   
   return (
      <Dialogs state={state} addMessage={onAddMessage} changeNewMessageText={onChangeNewMessageText}/>
   )
}

export default DialogsContainer;