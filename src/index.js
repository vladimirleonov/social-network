import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';


let renderEntireTree = () => { 
    // debugger;
    ReactDOM.render(
        <BrowserRouter>
            {/* <App state={store.getState()} dispatch={store.dispatch.bind(store)} /> */}
            <App store={store} />
        </BrowserRouter>, 
        document.getElementById('root')
    );
}

renderEntireTree();

// store.dispatch({ type: 'SUBSCRIBE',  observer: renderEntireTree});
store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
