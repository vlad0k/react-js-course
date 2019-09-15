import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialog from './components/Dialog/Dialog.jsx';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App-wrapper'>

        <Header className='App-header'/>

        <Navigation className='App-navigation' />

        <div className='App-content'>
          <Route path='/messages' component={Dialog} />
          <Route path='/profile' component={Profile} />
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
