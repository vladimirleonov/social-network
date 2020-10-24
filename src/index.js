import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postData = [
  { id: 1, message: "Hi, how are you?", likeCount:"15" },
  { id: 1, message: "It's my first post", likeCount:"20" },
  { id: 1, message: "It's the best cours", likeCount:"20" }
]

let dialogsData = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Valera'},
  {id: 4, name: 'Sveta'}
]

let messagesData = [
  { id: 1, name:"Dimysh", message:"I am learn react" },
  { id: 2, name:"Me", message:"Oh, good!" },
  { id: 3, name:"Me", message:"I also wont to start learn react. I also wont to start learn react. I also wont to start learn react" },
  { id: 4, name:"Dimysh", message:"You need to start" },
  { id: 5, name:"Me", message:"Yes" }
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
