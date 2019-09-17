import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialog from './components/Dialog/Dialog.jsx';

import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='App-wrapper'>

        <Header className='App-header'/>
        <Navigation className='App-navigation' />
        <div className='App-content'>

          <Route path='/messages' render={() => <Dialog messagesPage={props.appState.dialogsPage} />} />
          <Route path='/profile' render={() => <Profile profilePage={props.appState.profilePage} addPost={props.addPost}/>} />

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
