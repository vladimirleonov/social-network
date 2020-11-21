import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';
import { subscribe } from './redux/state';


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={ updateNewPostText }/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
