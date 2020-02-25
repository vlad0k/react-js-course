import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogContainer from './components/Dialog/DialogContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App-wrapper'>

      <Header className='App-header'/>
      <Navigation className='App-navigation' />
      <div className='App-content'>
        <Route
          path='/messages'
          render={() => <DialogContainer />}
        />
        <Route
          path='/profile'
          render={ () => <Profile /> }
        />
        <Route
          path='/users'
          render={ () => <UsersContainer /> }
        />
      </div>

    </div>
  );
}

export default App;
