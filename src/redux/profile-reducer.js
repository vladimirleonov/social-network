const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {      
   postData : [
      { id: 1, message: "Hi, how are you?", likeCount:"15" },
      { id: 2, message: "It's my first post", likeCount:"20" },
      { id: 3, message: "It's the best cours", likeCount:"20" }
   ],
   newPostText: ''
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 4,
            message: state.newPostText,
            likeCount: 0
         }

         let copyState = { ...state };
         copyState.postData = [...state.postData];

         copyState.postData.push(newPost);
         copyState.newPostText = '';
         // break;
         return copyState;
      }
      case UPDATE_NEW_POST_TEXT: {
         // debugger;
         let copyState = { ...state };
         copyState.newPostText = action.newText;
         // break;
         return copyState;
      }
      default: {
         return state;
      }
   }
   
   // if (action.type === ADD_POST) {
   //    let newPost = {
   //       id: 4,
   //       message: state.newPostText,
   //       likeCount: 0
   //    }
   //    state.postData.push(newPost);
   //    state.newPostText = '';
   // }
   // else if (action.type === UPDATE_NEW_POST_TEXT) {
   //    state.newPostText = action.newText;
   // }

   // return state;
}

export const addPostActionCreator = () => {
   return (
      {type: ADD_POST}
   )
}
export const updateNewPostTextActionCreator = (text) => {
   return (
      {
         type: UPDATE_NEW_POST_TEXT,
         newText: text
      }
   )
}

export default profileReducer;