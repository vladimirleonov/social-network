let state = {
   profilePage: {      
      postData : [
         { id: 1, message: "Hi, how are you?", likeCount:"15" },
         { id: 1, message: "It's my first post", likeCount:"20" },
         { id: 1, message: "It's the best cours", likeCount:"20" }
      ]
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
}

const sayHi = (postMessage) => {
   alert(postMessage);
}

export default state;