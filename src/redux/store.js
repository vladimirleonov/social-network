let store = {
   _state : {
      profilePage: {      
         postData : [
            { id: 1, message: "Hi, how are you?", likeCount:"15" },
            { id: 2, message: "It's my first post", likeCount:"20" },
            { id: 3, message: "It's the best cours", likeCount:"20" }
         ],
         newPostText: ""
      },
      dialogsPage: {
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
         ] 
      },
      navbar: {
         friends: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Valera' }
         ]
      }
   },

   getState() {
      return this._state;
   },

   _callSubscriber () {
      //console.log('state changed');
   },

   dispatch(action) {
      if (action.type === 'ADD-POST') {
         let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likeCount: 0
         }
         this._state.profilePage.postData.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber();
      }
      else if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber();
      }
      else if (action.type === 'SUBSCRIBE') {  
         this._callSubscriber = action.observer;
      }
   }

   // addPost() {
   //    let newPost = {
   //       id: 4,
   //       message: this._state.profilePage.newPostText,
   //       likeCount: 0
   //    }
   //    this._state.profilePage.postData.push(newPost);
   //    this._state.profilePage.newPostText = '';
   //    this._callSubscriber();
   // },

   // updateNewPostText (newText) {
   //    this._state.profilePage.newPostText = newText;
   //    this._callSubscriber();
   // },

   // subscribe (observer) {//subscribe - подписаться;observer - наблюдатель
   //    this._callSubscriber = observer;
   // },
}


export default store;
//window.store = store;


// let rerenderEntireTree = () => {
//    //console.log('state changed');
// }

// let state = {
//    profilePage: {      
//       postData : [
//          { id: 1, message: "Hi, how are you?", likeCount:"15" },
//          { id: 2, message: "It's my first post", likeCount:"20" },
//          { id: 3, message: "It's the best cours", likeCount:"20" }
//       ],
//       newPostText: ""
//    },
//    dialogsPage: {
//       dialogsData : [
//          {id: 1, name: 'Dimych'},
//          {id: 2, name: 'Andrey'},
//          {id: 3, name: 'Valera'},
//          {id: 4, name: 'Sveta'}
//       ],
//       messagesData : [
//          { id: 1, name:"Dimysh", message:"I am learn react" },
//          { id: 2, name:"Me", message:"Oh, good!" },
//          { id: 3, name:"Me", message:"I also wont to start learn react. I also wont to start learn react. I also wont to start learn react" },
//          { id: 4, name:"Dimysh", message:"You need to start" },
//          { id: 5, name:"Me", message:"Yes" }
//       ] 
//    },
//    navbar: {
//       friends: [
//          { id: 1, name: 'Dimych' },
//          { id: 2, name: 'Andrey' },
//          { id: 3, name: 'Valera' }
//       ]
//    }
// }

// export const addPost = () => {
//    let newPost = {
//       id: 4,
//       message: state.profilePage.newPostText,
//       likeCount: 0
//    }
//    state.profilePage.postData.push(newPost);
//    state.profilePage.newPostText = '';
//    rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText) => {
//    state.profilePage.newPostText = newText;
//    rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//    rerenderEntireTree = observer;
// }

// export default state;