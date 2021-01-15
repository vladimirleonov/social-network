import React from 'react';
import Dialogs from './Dialogs';
import { onNewMessageTextActionCreator, onAddMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
//    // debugger;
//    let state = props.store.getState();

//    const onAddMessage = () => {
//       props.store.dispatch(onAddMessageActionCreator());
//    }
 
//    const onChangeNewMessageText = (text) => {
//       props.store.dispatch(onNewMessageTextActionCreator(text));
//    }
   
//    return (
//       <Dialogs state={state} addMessage={onAddMessage} changeNewMessageText={onChangeNewMessageText}/>
//    )
// }

const mapStateToProps = (state) => { 
   return {
      state: state
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addMessage:  () => {
         dispatch(onAddMessageActionCreator());
      },
      changeNewMessageText:  (text) => {
         dispatch(onNewMessageTextActionCreator(text));
      }
   }
}

const DialogsContainerNew = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainerNew;