import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import './App.css';

const App = (props) => { 
  // debugger;
  return (
    <div className="app">
      <Header />
      <Navbar store={props.store}/>
      <div className="content">
        <Route path='/profile' render={() => <Profile store={props.store}/>} />
        <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings}/>
      </div>
    </div>
  );
}

export default App;
