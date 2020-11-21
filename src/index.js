import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
// import { addPost } from './redux/store';
// import { updateNewPostText } from './redux/store';
// import { subscribe } from './redux/store';


function renderEntireTree(store) {

    ReactDOM.render(
        <BrowserRouter>
            <App state={store.state} store={store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store);

store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
