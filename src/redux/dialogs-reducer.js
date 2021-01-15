const ON_ADD_MESSAGE = 'ON-ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
   dialogsData : [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Valera'},
      {id: 4, name: 'Sveta'}
   ],
   messagesData : [
      { id: 1, name:"Dimysh", message:"I am learn react" },
      { id: 2, name:"Me", message:"Oh, good!" },
      { id: 3, name:"Me", message:"I also wont to start learn react. I also wont to start learn react. I also wont to start learn react" },
      { id: 4, name:"Dimysh", message:"You need to start" },
      { id: 5, name:"Me", message:"Yes" }
   ],
   newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case ON_ADD_MESSAGE: {
         const newMessage = {
            id: 6,
            name: "Me",
            message: state.newMessageText
         }

         let copyState = { ...state };
         copyState.messagesData = [...state.messagesData];
         
         copyState.messagesData.push(newMessage);
         copyState.newMessageText = '';
         return copyState;
      }
      case UPDATE_NEW_MESSAGE_TEXT: {

         let copyState = { ...state };
         
         copyState.newMessageText = action.newText;
         return copyState;
      }
      default: {
         return state;
      }
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