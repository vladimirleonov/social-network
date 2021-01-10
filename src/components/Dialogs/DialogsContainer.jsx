import React from 'react';
import Dialogs from './Dialogs';
import { onNewMessageTextActionCreator, onAddMessageActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

   return (
      <StoreContext.Consumer>
      {
         (store) => {
            // debugger;
            let state = store.getState();

            const onAddMessage = () => {
               store.dispatch(onAddMessageActionCreator());
            }

            const onChangeNewMessageText = (text) => {
               store.dispatch(onNewMessageTextActionCreator(text));
            }
            
            return (
               <Dialogs state={state} addMessage={onAddMessage} changeNewMessageText={onChangeNewMessageText}/>
            )
         }
      }
      </StoreContext.Consumer>
   )

}

export default DialogsContainer;