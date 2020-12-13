const ON_ADD_MESSAGE = 'ON-ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

   switch (action.type) {
      case ON_ADD_MESSAGE: 
         const newMessage = {
            id: 6,
            name: "Me",
            message: state.newMessageText
         }
         state.messagesData.push(newMessage);
         state.newMessageText = '';
         break;
      case UPDATE_NEW_MESSAGE_TEXT: 
         state.newMessageText = action.newText;
         break;
      default:
         return state;
   }

   // if (action.type === ON_ADD_MESSAGE) {
   //    const newMessage = {
   //       id: 6,
   //       name: "Me",
   //       message: state.newMessageText
   //    }
   //    state.messagesData.push(newMessage);
   //    state.newMessageText = '';
   // }
   // else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
   //    state.newMessageText = action.newText;
   // }
   
   // return state;
}

export const onNewMessageTextActionCreator = (text) => {
   return (
      { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
   )
}

export const onAddMessageActionCreator = () => {
   return (
      { type: ON_ADD_MESSAGE }
   )
}

export default dialogsReducer;