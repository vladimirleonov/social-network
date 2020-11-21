let store = {
   state : {
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

   rerenderEntireTree : function() {
      //console.log('state changed');
   },

   addPost : function() {
      let newPost = {
         id: 4,
         message: this.state.profilePage.newPostText,
         likeCount: 0
      }
      this.state.profilePage.postData.push(newPost);
      this.state.profilePage.newPostText = '';
      this.rerenderEntireTree(this.state);
   },

   updateNewPostText : function (newText) {
      this.state.profilePage.newPostText = newText;
      this.rerenderEntireTree(this.state);
   },

   subscribe : function (observer) {//subscribe - подписаться;observer - наблюдатель
      this.rerenderEntireTree = observer;
   }
}

export default store;


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