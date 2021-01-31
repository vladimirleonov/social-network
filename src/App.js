import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FindUsersContainer from './components/Users/FindUsersContainer';

import './App.css';

const App = (props) => { 
  // debugger;
  return (
    <div className="app">
      <Header />
      <Navbar store={props.store}/>
      <div className="content">
        <Route path='/profile' render={() => <Profile/>} />
        <Route path='/dialogs' render={() => <DialogsContainer/>} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/find-users' render={() => <FindUsersContainer/>}/>
      </div>
    </div>
  );
}

export default App;
